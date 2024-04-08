import * as mongoose from 'mongoose';
import { Types } from 'mongoose';
const uuid = require('uuid');

interface Resource {
  _id?: string;
  title: string;
  type: string;
}

const ResouceSchema = new mongoose.Schema<Resource>({
  title: { type: String, required: true },
  type: { type: String, required: true }
});
  
const ResourceModel = mongoose.model<Resource>('resources', ResouceSchema);
export default class UserService {
  public static async createResource(query: any) {
      return await ResourceModel.create(query)
  }
  public static async updateResource(query: any, updateNew: any) {
      return await ResourceModel.findOneAndUpdate(query, updateNew)
  }
  public static async findResourceDetail(query: any) {
      return await ResourceModel.findOne(query)
  }
}

export { Resource, ResourceModel };
import * as mongoose from 'mongoose';
import { Types } from 'mongoose';
const uuid = require('uuid');

interface Resource {
  _id?: string;
  title: string;
  type: string;
  price: number;
}

const resouceSchema = new mongoose.Schema<Resource>({
  title: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true }
});
  
const ResourceModel = mongoose.model<Resource>('resources', resouceSchema);
export default class UserService {
  public static async createResource(query: any) {
      return await ResourceModel.create(query)
  }
  public static async updateResource(query: any, updateNew: any) {
      return await ResourceModel.findOneAndUpdate(query, updateNew)
  }
  public static async findOneAndUpdate(query: any, update_params: any, returnNew = true) {
    return await ResourceModel.findOneAndUpdate(query, update_params, { new: returnNew })
  }
  public static async findResourceDetail(query: any) {
      return await ResourceModel.findOne(query)
  }
  public static async findResourceFilter(query: any) {
      return await ResourceModel.find(query)
  }
}

export { Resource, ResourceModel };
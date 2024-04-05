import * as mongoose from 'mongoose';
import { Types } from 'mongoose';
const uuid = require('uuid');

interface Resource {
    title: string;
    type: string;
  }
  const ResouceMDataSchema = new mongoose.Schema<ResourceMData>({
    title: { type: String, required: true },
    type: { type: String, required: true }
  });
  const ResourceMDataModel = mongoose.model<ResourceMData>('resource-master-datas', ResourceMDataSchema);
  export { ResourceMDataModel, ResourceMData };
  interface Resource {
    _id?: string;
    title: string;
    type: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
  const schema = new mongoose.Schema<Resource>({
    _id: { type: String, default: uuid.v4 },
    title: { type: String },
    type: { type: String }
  });
  
  // 3. Create a Model.
  const ResourceModel = mongoose.model<Resource>('resources', schema);
  export { ResourceModel};
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

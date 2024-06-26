import { Types } from 'mongoose';
import { Resource, ResourceModel } from '../models/resource';
const run = async () => {
    if ((await ResourceModel.countDocuments({})) == 0) {
        const resource1 = new ResourceModel({
            _id: new Types.ObjectId(),
            title: '99tech resource no.1',
            type: 'wood',
            price: 100
        });
        const resource2 = new ResourceModel({
            _id: new Types.ObjectId(),
            title: '99tech resource no.2',
            type: 'iron',
            price: 200
        });
        const resource3 = new ResourceModel({
            _id: new Types.ObjectId(),
            title: '99tech resource no.3',
            type: 'titan',
            price: 300
        });
    await resource1.save();
    await resource2.save();
	await resource3.save();
    }
}
export default run;
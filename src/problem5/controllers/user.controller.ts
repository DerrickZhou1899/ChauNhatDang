const uuid = require('uuid');
import { Types } from 'mongoose';
import UserService, { ResourceModel } from '../models/resource';

const listResource = async (req, res) => {
    let data = req.body;
    let listResources = [];
    if(data != ''){
        listResources = await ResourceModel.aggregate([{
            $match:
            {
                $and:
                [
                    {
                        type: data.type
                    },
                    {
                        price: 
                        {
                            $gte: data.minPrice, 
                            $lte: data.maxPrice          
                        }
                    }
                ]
            }
        }]);
        if(!listResources){
            return res.status(400).send({message: 'Wrong syntax'});
        }
        if(listResources.length > 0){
            return res.status(200).send(listResources);
        }
        else {
            return res.status(200).send({ message: 'list empty'});
        }
    }
}
const createResource = async (req, res) => {
    let data = req.body;
    const newResource = new ResourceModel({
        _id: new Types.ObjectId(),
        title: data.title,
        type: data.type,
        price: data.price
    })
    await newResource.save();
    if (data) {
        return res.status(200).send(newResource);
    }else {
        return res.status(400).send({ message: 'Error' });
    }
}
const listAll = async (req,res) => {
    let listResources = await ResourceModel.find({});
    return res.status(200).send(listResources);
}
const updateResource = async (req, res) => {
    let data = req.body;
    let updateResource = await ResourceModel.findOneAndUpdate(
        {
            _id: data._id
        },
        {
            $set: 
            {
                title: data.title,
                type: data.type
            }
        },
        {
            returnDocument: 'after'
        }
    )
    if(!updateResource){
        return res.status(400).send({ message: 'Wrong syntax'});
    }else{
        return res.status(200).send(updateResource);
    }
}
const getResourceDetail = async (req, res) => {
    let data = req.body;
    let getDetail = await ResourceModel.find(
        {
            _id: data._id
        }
    );
    if(!getDetail){
        return res.status(400).send({ message: 'Wrong or syntax'});
    }if(getDetail.length > 0){
        return res.status(200).send(getDetail);
    }else{
        return res.status(200).send({ message: 'Wrong Id'});
    }
}
const deleteOne = async (req, res) => {
    let data = req.body;
    let deleteOneResource = await ResourceModel.findOneAndDelete(
        {
            _id: data._id
        }
    )
    if(!deleteOneResource){
        return res.status(400).send({ message: 'Cant find resource'});
    }else{
        return res.status(200).send({ message: 'Done, resource deleted'});
    }
}
const deleteMany = async (req, res) => {
    let data = req.body;
    let deleteManyResource = await ResourceModel.deleteMany(
        {
            type: data.type,
            price: { $gt : data.price }
        }
    )
    console.log('Number of deleted resource: ' + deleteManyResource.deletedCount);
    if(deleteManyResource.deletedCount<1){
        return res.status(400).send({ message: 'Wrong type or price of resources'});
    }else{
        return res.status(200).send({ message: 'Done, resources deleted'});
    }
}
export default {
    createResource,
    updateResource,
    listResource,
    getResourceDetail,
    deleteOne,
    deleteMany,
    listAll
};
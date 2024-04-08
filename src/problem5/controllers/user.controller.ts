const uuid = require('uuid');
import { Types } from 'mongoose';
import UserService, { ResourceModel } from '../models/resource';
const createResource = async (req, res) => {
    let data = req.body;
    const reSource = new ResourceModel({
        _id: new Types.ObjectId(),
        title: data.title,
        type: data.type,
    })
    if (data) {
        return res.status(200).send({ message: 'Done' });
    }else {
        res.status(400).send({ message: 'Error' });
    }
}
const listResource = async (req, res) => {
}
const getResourceDetail = async (req, res) => {
}
const deleteResource = async (req, res) => {
}
const updateResource = async (req,res) => {

}
export default {
    createResource,
    updateResource,
    listResource,
    getResourceDetail,
    deleteResource
};
const uuid = require('uuid');
import { Types } from 'mongoose';
const createResource = async (req, res) => {
    let user = { ...req.user };
    let nft = req.body;
    // flow 7.Load nft list in user collection
    let item_list = user.nft_collections;
    // flow 8.Change nft ownership
    nft.ownership = user._id;
    //phải tìm loại nft là loại gì rồi mới thêm nft vào sau
    item_list.push(nft);
    user = await UserService.updateUser(
      { _id: user._id },
      { $set: { nft_collections: item_list } },
      { new: true },
    );
    if (user) {
      return returnUser(res, user.toObject());
    } else {
      return res.status(400).send({ message: 'User is null' });
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
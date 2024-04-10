"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require('uuid');
const mongoose_1 = require("mongoose");
const resource_1 = require("../models/resource");
const createResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    const reSource = new resource_1.ResourceModel({
        _id: new mongoose_1.Types.ObjectId(),
        title: data.title,
        type: data.type,
    });
    if (data) {
        return res.status(200).send({ message: 'Done' });
    }
    else {
        res.status(400).send({ message: 'Error' });
    }
});
const listResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const getResourceDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const deleteResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const updateResource = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.default = {
    createResource,
    updateResource,
    listResource,
    getResourceDetail,
    deleteResource
};
//# sourceMappingURL=user.controller.js.map
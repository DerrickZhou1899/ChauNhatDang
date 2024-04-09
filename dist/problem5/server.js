"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express;
const mongoose = require('mongoose');
const config_1 = require("./configs/config");
const connectToMongo = () => {
    console.log(typeof (config_1.ConfigService.get('MONGO_URL2')));
    mongoose.connect(config_1.ConfigService.get('MONGO_URL2'), {});
    console.log("Connected correctly to DB.");
};
module.exports = connectToMongo;
//# sourceMappingURL=server.js.map
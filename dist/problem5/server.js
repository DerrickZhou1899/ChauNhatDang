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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const http_1 = __importDefault(require("http"));
const app = express;
const mongoose = require('mongoose');
const index_1 = __importDefault(require("./seeds/index"));
const config_1 = require("./configs/config");
console.log(config_1.ConfigService.get('MONGO_URL'));
mongoose.connect(config_1.ConfigService.get('MONGO_URL'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log('Some problem with the connection ' + err);
    }
    else {
        console.log('The Mongoose connection is ready');
    }
});
const appServer = http_1.default.createServer(app);
appServer.listen(3000, () => {
    console.log('server port number: 3000');
});
const seedRunAll = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const seed of Object.values(index_1.default)) {
        console.log(seed);
        yield seed.default();
    }
});
seedRunAll()
    .then((res) => {
    const port = config_1.ConfigService.get('API_PORT');
    app.listen(parseInt(port)).then(() => {
        console.log(`App listening on ://localhost:${port}`);
    });
})
    .catch((err) => console.log(err));
//# sourceMappingURL=server.js.map
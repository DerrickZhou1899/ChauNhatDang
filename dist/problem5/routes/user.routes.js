"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const routes = (0, express_1.Router)();
routes.post('/create-resource', user_controller_1.default.createResource);
routes.put('/update-resource', user_controller_1.default.getResourceDetail);
routes.get('/resource-detail', user_controller_1.default.getResourceDetail);
routes.get('/list-resource', user_controller_1.default.listResource);
routes.delete('/delete-resource', user_controller_1.default.deleteResource);
exports.default = routes;
//# sourceMappingURL=user.routes.js.map
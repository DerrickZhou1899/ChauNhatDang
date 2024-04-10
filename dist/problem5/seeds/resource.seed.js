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
const mongoose_1 = require("mongoose");
const resource_1 = require("../models/resource");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield resource_1.ResourceModel.countDocuments({})) == 0) {
        const resource1 = new resource_1.ResourceModel({
            _id: new mongoose_1.Types.ObjectId(),
            title: '99tech resource no.1',
            type: 'wood'
        });
        const resource2 = new resource_1.ResourceModel({
            _id: new mongoose_1.Types.ObjectId(),
            title: '99tech resource no.2',
            type: 'iron'
        });
        const resource3 = new resource_1.ResourceModel({
            _id: new mongoose_1.Types.ObjectId(),
            title: '99tech resource no.3',
            type: 'titan'
        });
        yield resource1.save();
        yield resource2.save();
        yield resource3.save();
    }
});
exports.default = run;
//# sourceMappingURL=resource.seed.js.map
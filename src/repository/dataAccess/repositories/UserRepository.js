"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_1 = require("../../model/entities/user");
const GenericRepository_1 = __importDefault(require("./GenericRepository"));
class UserRepository extends GenericRepository_1.default {
    constructor() {
        super(user_1.UserModel);
    }
}
exports.UserRepository = UserRepository;

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
exports.UserService = void 0;
const UOWRepository_1 = require("../../dataAccess/repositories/UOWRepository");
class UserService {
    constructor() {
        this.UOWRep = new UOWRepository_1.UOWRep();
    }
    Create(AddUserModel) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.UserService = UserService;

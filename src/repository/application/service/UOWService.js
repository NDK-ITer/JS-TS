"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UOWService = void 0;
const userService_1 = require("./userService");
const songService_1 = require("./songService");
class UOWService {
    constructor() {
        this.SongService = new songService_1.SongService();
        this.UserService = new userService_1.UserService();
    }
}
exports.UOWService = UOWService;

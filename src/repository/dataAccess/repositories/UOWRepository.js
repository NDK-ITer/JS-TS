"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UOWRep = void 0;
const UserRepository_1 = require("./UserRepository");
const SongRepository_1 = require("./SongRepository");
class UOWRep {
    constructor() {
        this.SongRepository = new SongRepository_1.SongRepository();
        this.UserRepository = new UserRepository_1.UserRepository();
    }
}
exports.UOWRep = UOWRep;

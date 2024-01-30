"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongRepository = void 0;
const song_1 = require("../../model/entities/song");
const GenericRepository_1 = __importDefault(require("./GenericRepository"));
class SongRepository extends GenericRepository_1.default {
    constructor() {
        super(song_1.SongModel);
    }
}
exports.SongRepository = SongRepository;

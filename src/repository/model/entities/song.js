"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const songSchema = new mongoose_1.default.Schema({
    name: String,
    publishedDate: String,
    genres: [String],
    user: String
});
exports.SongModel = mongoose_1.default.model("Song", songSchema);

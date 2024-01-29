import mongoose from "mongoose";
import song from "../model/entities/song";
import user from "../model/entities/user";

const userSchema = new mongoose.Schema(user);
const songSchema = new mongoose.Schema(song);

let Song = mongoose.model<song>("Song", songSchema);
let User = mongoose.model<user>("User", userSchema);

export default{ Song, User };
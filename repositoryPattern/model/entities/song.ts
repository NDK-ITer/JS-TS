import mongoose, {Document} from"mongoose";
import { IUser } from "./user";

export interface ISong extends Document {
    name: string;
    publishedDate: string;
    genres: [string];
    user: IUser['_id'];
}

const songSchema = new mongoose.Schema<ISong>({
    name: String,
    publishedDate: String,
    genres: [String],
    user: String
})

export const SongModel =  mongoose.model<ISong>("Song", songSchema)

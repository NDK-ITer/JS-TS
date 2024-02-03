import mongoose, {Document} from"mongoose";

export interface ISong extends Document {
    name: string;
    publishedDate: string;
    genres: [string];
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}

const songSchema = new mongoose.Schema<ISong>({
    name: String,
    publishedDate: String,
    genres: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const SongModel =  mongoose.model<ISong>("Song", songSchema)

import mongoose, {Document} from"mongoose";

export interface ISong extends Document {
    name: string;
    publishedDate: string;
    fileName: {
        type: string,
        require: true
    }
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}

const songSchema = new mongoose.Schema<ISong>({
    name: String,
    publishedDate: String,
    fileName: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const SongModel =  mongoose.model<ISong>("Song", songSchema)

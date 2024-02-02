import mongoose, {Document, Types} from"mongoose";
import { ISong } from "./song";

export interface IUser extends Document {
    firstName: {
        type: String,
        required:true
    }
    lastName: {
        type: String,
        required:true
    }
    born: {
        type: Number,
        required:true
    }
    songs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    };
}

const userSchema = new mongoose.Schema<IUser>({
    firstName: String,
    lastName: String,
    born: Number,
    songs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }
})

export const UserModel = mongoose.model<IUser>('User', userSchema);
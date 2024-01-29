import mongoose, {Document} from"mongoose";

interface user extends Document {
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
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
        },
    ]
}

const userSchema = new mongoose.Schema<user>({
    firstName: String,
    lastName: String,
    born: Number,
    songs: [String]
})

export default mongoose.model<user>('User', userSchema);
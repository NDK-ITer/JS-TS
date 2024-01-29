import mongoose, {Document} from"mongoose";

interface song extends Document {
    name: {
        type: String,
        required: true,
    }
    publishedDate: {
        type: String,
        required: true,
    }
    genres: {
        type: [String],
    }
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}

const songSchema = new mongoose.Schema<song>({
    name: String,
    publishedDate: String,
    genres: [String],
    user: String
})

export default mongoose.model<song>("Song", songSchema)

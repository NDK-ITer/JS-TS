import mongoose, {Document} from"mongoose";

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
        type: Date,
        required:true
    }
    email: {
        type: string,
        required:true
    }
    passwordHash:{
        type: string,
        required:true
    },
    tokenAccess:{
        type: string,
    },
    role: {
        type: string,
        required:true
    }
    songs: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Song'
        }
    ];
}

const userSchema = new mongoose.Schema<IUser>({
    firstName: String,
    lastName: String,
    born: Date,
    email: String,
    passwordHash: String,
    role: String,
    songs: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Song'
        }
    ]
})

export const UserModel = mongoose.model<IUser>('User', userSchema);
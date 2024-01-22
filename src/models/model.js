const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    born: {
        type: Number,
        required:true
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Song",
        },
    ],
});

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: String,
        required: true,
    },
    genres: {
        type: [String],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

let Song = mongoose.model("Song", songSchema);
let User = mongoose.model("User", userSchema);

module.exports = { Song, User };
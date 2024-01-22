const { Song, User } = require("../models/model");

const songController = {
    add: async(req, res) =>{
        try{
            const newSong = new Song(req.body);
            const saveSong = await newSong.save();
            if(req.body.user){
                const user = User.findById(req.body.user);
                await user.updateOne({ $push : { songs: saveSong._id}});
            }
            res.status(200).json(saveSong);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAll: async(req, res) => {
        try{
            const songs = await Song.find();
            res.status(200).json(songs);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
module.exports = songController;
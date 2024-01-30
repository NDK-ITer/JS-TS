
const songController = {
    add: async(req, res) =>{
        try{
            // if(req.body.user){
            //     const user = User.findById(req.body.user);
            //     await user.updateOne({ $push : { songs: saveSong._id}});
            // }
            res.status(200).json(saveSong);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // getAll: async(req, res) => {
    //     try{
    //         const songs = await Song.find().populate("user");
    //         res.status(200).json(songs);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // getById: async(req, res) => {
    //     try {
    //         const song = await Song.findById(req.params.id).populate("user");
    //         res.status(200).json(song);
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }
    // },
    // update: async(req, res) => {
    //     try {
    //         const song = await Song.findById(req.body.id);
    //         var updateSong = {
    //             name : req.body.name
    //         };
    //         await song.updateOne({$set: updateSong});
    //         res.status(200).json("update successful!")
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }
    // },
    // delete: async(req, res) => {
    //     try {
    //         await Song.findByIdAndDelete(req.params.id);
    //         res.status(200).json("delete successful!")
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }
    // }
}
module.exports = songController;
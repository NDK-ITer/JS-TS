import SongController from "../controllers/songController";

const songRoute = require('express').Router();

songRoute.post('/add', SongController.Create);
songRoute.get('/all', SongController.GetAll);
songRoute.get('/:id', SongController.GetById);
songRoute.delete('/del/:id', SongController.Delete);

export default songRoute;

// songRoute.get();
// songRoute.post();
// songRoute.put();
// songRoute.Delete();
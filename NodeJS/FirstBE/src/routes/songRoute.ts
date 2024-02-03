import SongController from "../controllers/songController";

const songRoute = require('express').Router();

songRoute.post('/add', SongController.Create);
songRoute.get('/all', SongController.GetAll);
songRoute.put('/update', SongController.Update);
songRoute.get('/:id', SongController.GetById);
songRoute.delete('/del/:id', SongController.Delete);
songRoute.get('/user/:id', SongController.GetByUserId);

export default songRoute;

// songRoute.get();
// songRoute.post();
// songRoute.put();
// songRoute.Delete();
import SongController from "../controllers/songController";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const songRoute = require('express').Router();

songRoute.get('/all', AuthMiddleware.AuthenticateJWT, AuthMiddleware.IsAdmin, SongController.GetAll);
songRoute.get('/:id', SongController.GetById);
songRoute.get('/user/:id', AuthMiddleware.AuthenticateJWT, SongController.GetByUserId);

songRoute.post('/add', AuthMiddleware.AuthenticateJWT, SongController.Create);
songRoute.put('/update', AuthMiddleware.AuthenticateJWT, SongController.Update);
songRoute.delete('/del/:id', AuthMiddleware.AuthenticateJWT, SongController.Delete);


export default songRoute;

// songRoute.get();
// songRoute.post();
// songRoute.put();
// songRoute.Delete();
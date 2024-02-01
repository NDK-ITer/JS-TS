import AuthController from "../controllers/songController";

const songRoute = require('express').Router();

songRoute.post('/add', AuthController.Create);
songRoute.get('/all', AuthController.GetAll);

export default songRoute;
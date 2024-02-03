import AuthController from "../controllers/authController";

const authRoute = require('express').Router();

authRoute.post('/register', AuthController.Register);

export default authRoute;
// authRoute.get();
// authRoute.post();
// authRoute.put();
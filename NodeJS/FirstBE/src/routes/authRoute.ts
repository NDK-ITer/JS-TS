import AuthController from "../controllers/authController";

const authRoute = require('express').Router();

authRoute.post('/register', AuthController.Register);
authRoute.post('/login', AuthController.Login);

export default authRoute;
// authRoute.get();
// authRoute.post();
// authRoute.put();
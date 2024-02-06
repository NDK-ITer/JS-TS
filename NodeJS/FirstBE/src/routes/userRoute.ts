import UserController from "../controllers/userController";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const userRoute = require('express').Router();

userRoute.put('/edit', AuthMiddleware.AuthenticateJWT, UserController.Edit);
userRoute.get('/:id', UserController.GetById);

export default userRoute;
// userRoute.get();
// userRoute.post();
// userRoute.put();
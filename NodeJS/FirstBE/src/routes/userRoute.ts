import multer from "multer";
import UserController from "../controllers/userController";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { publicPath } from "../constants";
import UOWService from "../repository/application/service/UOWService";

const userRoute = require('express').Router();

const storage = multer.diskStorage({
    destination: function (req: any, file, cb) {
        if (file) {
            cb(null, publicPath);
        }
    },
    filename: async function (req: any, file, cb) {
        if (file) {
            const user = await UOWService.UserService.GetById(req.user.id)
            req.body.avatarName = user.data.avatar;
            cb(null,  req.body.avatarName);
        }
    }
});  
const upload = multer({ storage: storage });

userRoute.put('/edit', AuthMiddleware.AuthenticateJWT, upload.single('avatar'), UserController.Edit);
userRoute.get('/all', AuthMiddleware.AuthenticateJWT, AuthMiddleware.IsAdmin, UserController.GetAll);
userRoute.get('/me', AuthMiddleware.AuthenticateJWT, UserController.GetMyInformation);
userRoute.get('/:id', UserController.GetById);


export default userRoute;
// userRoute.get();
// userRoute.post();
// userRoute.put();
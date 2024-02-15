import multer from "multer";
import UserController from "../controllers/userController";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { publicPath } from "../constants";
import UOWService from "../repository/application/service/UOWService";
import path from "path";

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
            let fileName = ``
            if (user.data.avatar) {
                fileName = user.data.avatar
            }else{
                const extension = path.extname(file.originalname);
                const uniqueSuffix = `avatar-${Date.now() + '-' + Math.round(Math.random() * 1E9)}`;
                fileName = uniqueSuffix + extension;
            }
            req.body.avatarName = fileName;
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
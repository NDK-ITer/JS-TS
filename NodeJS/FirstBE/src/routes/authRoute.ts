import multer from "multer";
import AuthController from "../controllers/authController";
import path from "path";
import { publicPath } from "../constants";

const authRoute = require('express').Router();

const storage = multer.diskStorage({
    destination: function (req: any, file, cb) {
        cb(null, publicPath);
    },
    filename: function (req: any, file, cb) {
        const extension = path.extname(file.originalname);
        const uniqueSuffix = `avatar-${Date.now() + '-' + Math.round(Math.random() * 1E9)}`;
        const fileName = uniqueSuffix + extension;
        req.body.avatarName = fileName;
        cb(null, fileName);
    }
});  

const upload = multer({ storage: storage });

authRoute.post('/register', upload.single(''), AuthController.Register);
authRoute.post('/login',upload.single(''), AuthController.Login);

export default authRoute;
// authRoute.get();
// authRoute.post();
// authRoute.put();
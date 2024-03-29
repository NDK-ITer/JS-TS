import multer from "multer";
import SongController from "../controllers/songController";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { publicPath } from "../constants";
import path from "path";
import UOWService from "../repository/application/service/UOWService";

const songRoute = require('express').Router();

const storage = multer.diskStorage({
    destination: function (req: any, file, cb) {
        cb(null, publicPath);
    },
    filename: function (req: any, file, cb) {
        const extension = path.extname(file.originalname);
        const uniqueSuffix = `${file.fieldname}-${Date.now() + '-' + Math.round(Math.random() * 1E9)}`;
        const fileName = uniqueSuffix + extension;
        req.body[file.fieldname] = fileName;
        cb(null, fileName);
    }
});  
const upload = multer({ storage: storage });

const storageUpdate = multer.diskStorage({
    destination: function (req: any, file, cb) {
        if (file) {
            cb(null, publicPath);
        }
    },
    filename: async function (req: any, file, cb) {
        if (file) {
            const result = await UOWService.SongService.GetById(req.body.id)
            req.body.fileName = result.data.fileName;
            cb(null,  req.body.fileName);
        }
    }
});  
const uploadUPdate = multer({ storage: storageUpdate });

songRoute.get('/all', AuthMiddleware.AuthenticateJWT, AuthMiddleware.IsAdmin, SongController.GetAll);
// songRoute.get('/all', SongController.GetAll);
songRoute.get('/my-song', AuthMiddleware.AuthenticateJWT, SongController.GetByMe);
songRoute.get('/:id', SongController.GetById);
songRoute.get('/user/:id', SongController.GetByUserId);

songRoute.post('/add', AuthMiddleware.AuthenticateJWT, upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'sound', maxCount: 1 }
]), SongController.Create);

songRoute.put('/update', AuthMiddleware.AuthenticateJWT, uploadUPdate.single('file'), SongController.Update);

songRoute.delete('/del/:id', AuthMiddleware.AuthenticateJWT, SongController.Delete);


export default songRoute;
// songRoute.get();
// songRoute.post();
// songRoute.put();
// songRoute.Delete();
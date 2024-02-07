import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';
import { publicPath } from '../constants';
import { FileMethods } from '../repository/application/lib/FIleMethods';


class AuthController{
    static async Register(req:any, res: Response):Promise<any>{
        const user = await UOWService.UserService.Create(req.body)
        if (user.state != 1) {
            await FileMethods.Delete(`${publicPath}\\${req.body.avatarName}`)
        }
        res.json(user);
    }

    static async Login(req: any, res: Response):Promise<any>{
        const userJWT = await UOWService.UserService.GetJWT(req.body)
        if (userJWT.state == 1) {
            userJWT.data.linkAvatar = `${req.protocol}://${req.get('host')}/${userJWT.data.avatar}`
        }
        res.json(userJWT)
    }
}

export default AuthController;
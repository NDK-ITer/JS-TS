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
        const result = await UOWService.UserService.GetJWT(req.body)
        if (result.state == 1) {
            result.data.linkAvatar = `${req.protocol}://${req.get('host')}/${result.data.avatar}`
        }
        res.json(result)
    }

}

export default AuthController;
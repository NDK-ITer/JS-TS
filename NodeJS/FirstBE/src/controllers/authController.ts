import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';
import { publicPath, imagePath } from '../constants';
import { FileMethods } from '../repository/application/lib/FIleMethods';


class AuthController{
    static async Register(req:any, res: Response):Promise<any>{
        const avatarName = `avatar-${Date.now() + '-' + Math.round(Math.random() * 1E9)}.png`
        const avatar = await FileMethods.readImage(`${imagePath}\\default-avatar.png`)
        const saveResult = await FileMethods.saveImage(avatar, publicPath, avatarName)
        if (saveResult) {
            req.body.avatarName = saveResult
        }
        const result = await UOWService.UserService.Create(req.body)
        if (result.state != 1) {
            await FileMethods.Delete(`${publicPath}\\${req.body.avatarName}`)
        }
        res.json(result);
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
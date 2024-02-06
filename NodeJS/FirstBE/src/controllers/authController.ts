import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class AuthController{
    static async Register(req:any, res: Response):Promise<any>{
        res.json(await UOWService.UserService.Create(req.body));
    }

    static async Login(req: any, res: Response):Promise<any>{
        res.json(await UOWService.UserService.GetJWT(req.body))
    }
    
}

export default AuthController;
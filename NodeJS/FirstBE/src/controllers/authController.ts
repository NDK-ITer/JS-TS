import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class AuthController{
    static async Register(req:any, res: Response):Promise<any>{
        res.json(await UOWService.UserService.Create(req.body));
    }
}

export default AuthController;
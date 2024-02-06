import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class UserController{
    static async GetById(req:any, res: Response):Promise<any>{
        res.json(await UOWService.UserService.GetById(req.params.id));
    }

    static async Edit(req: any, res: Response): Promise<any>{
        res.json(await UOWService.UserService.Edit(req.body))
    }
}

export default UserController;
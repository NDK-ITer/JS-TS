import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class UserController{
    static async GetById(req:any, res: Response):Promise<any>{
        res.json(await UOWService.UserService.GetById(req.params.id));
    }

    static async Edit(req: any, res: Response): Promise<any>{
        const userEdit = await UOWService.UserService.Edit(req.user.id,req.body);
        res.json(userEdit)
    }

    static async GetAll(req: any, res: Response){
        res.json(await UOWService.UserService.GetAll())
    }

    static async GetMyInformation(req: any, res: Response): Promise<any>{
        const result = await UOWService.UserService.GetInformation(req.user.id);
        if (result.state == 1) {
            result.data.linkAvatar = `${req.protocol}://${req.get('host')}/${result.data.avatar}`
        }
        res.json(result)
    }
}

export default UserController;
import { publicPath } from '../constants';
import { FileMethods } from '../repository/application/lib/FIleMethods';
import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class SongController {
    static async Create(req: any, res: Response): Promise<any>{
        const result = await UOWService.SongService.Create(req.user.id,req.body);
        res.json(result);
    };

    static async GetAll(req: any, res: Response): Promise<any>{
        const result = await UOWService.SongService.GetAll()
        res.json(result);
    };

    static async GetById(req: any, res: Response): Promise<any>{
        const result = await UOWService.SongService.GetById(req.params.id)
        res.json(result);
    };

    static async Delete(req: any, res: Response): Promise<any>{
        const result = await UOWService.SongService.Delete(req.user.id, req.params.id)
        if (result.state == 1) {
            await FileMethods.Delete(`${publicPath}\\${result.fileName}`)
        }
        res.json(result)
    };

    static async Update(req: any, res: Response): Promise<any>{
        const result = await UOWService.SongService.Update(req.user.id, req.body)
        res.json(result);
    }

    static async GetByUserId(req: any, res: Response):Promise<any>{
        const result = await UOWService.SongService.GetByUserId(req.params.id)
        res.json(result);
    }
}

export default SongController;
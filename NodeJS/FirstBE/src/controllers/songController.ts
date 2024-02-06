import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class SongController {
    static async Create(req: any, res: Response): Promise<any>{
        const addSong = await UOWService.SongService.Create(req.user.id,req.body);
        res.json(addSong);
    };

    static async GetAll(req: any, res: Response): Promise<any>{
        res.json(await UOWService.SongService.GetAll());
    };

    static async GetById(req: any, res: Response): Promise<any>{
        res.json(await UOWService.SongService.GetById(req.params.id));
    };

    static async Delete(req: any, res: Response): Promise<any>{
        res.json(await UOWService.SongService.Delete(req.user.id, req.params.id))
    };

    static async Update(req: any, res: Response): Promise<any>{
        res.json(await UOWService.SongService.Update(req.user.id, req.body));
    }

    static async GetByUserId(req: any, res: Response):Promise<any>{
        res.json(await UOWService.SongService.GetByUserId(req.params.id));
    }
}

export default SongController;
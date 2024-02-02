import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class SongController {
    static async Create(req: any, res: Response): Promise<void>{
        const addSong = await UOWService.SongService.Create({
            Name: req.body.name,
            UserId: req.body.user,
            genres: req.body.genres
        });
        res.json(addSong);
    };

    static async GetAll(req: any, res: Response): Promise<void>{
        const allSong = await UOWService.SongService.GetAll();
        res.json({
            Count: allSong.length,
            ListSong: allSong
        });
    };

    static async GetById(req: any, res: Response): Promise<any>{
        res.json(await UOWService.SongService.GetById(req.params.id));
    };

    static async Delete(req: any, res: Response): Promise<any>{
        res.json(await UOWService.SongService.Delete(req.params.id))
    };
}

export default SongController;
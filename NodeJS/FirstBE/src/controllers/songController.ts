import UOWService from '../repository/application/service/UOWService';
import { Response } from 'express';

class AuthController {
    static async Create(req: any, res: Response): Promise<void>{
        const song = UOWService.SongService.Create({
            Name: req.body.name,
            UserId: undefined,
            genres: undefined
        });
        res.json({
            mess: "Adding song is successful",
            song: song
        });
    };

    static async GetAll(req: any, res: Response): Promise<void>{
        console.log(UOWService.SongService.GetAll());
        res.json({
            songs: await UOWService.SongService.GetAll()
        });
    }
}

export default AuthController;
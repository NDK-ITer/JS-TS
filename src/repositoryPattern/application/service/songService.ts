import { UOWRep } from '../../dataAccess/repositories/UOWRepository';
import { AddSongModel } from '../models/songModels/addSongModel';

export class SongService{
    private UOWRep : UOWRep;
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(addSong: AddSongModel){
        
        await this.UOWRep.SongRepository.Add({
            name: addSong.Name,
            publishedDate: new Date().toLocaleDateString(),
            genres: addSong.genres
        });
        // if(addSong.UserId != null){
        //     await this.UOWRep.UserRepository
        // }
    }
}
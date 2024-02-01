import { UOWRep } from '../../dataAccess/repositories/UOWRepository';
import { AddSongModel } from '../models/songModels/addSongModel';

export class SongService{
    private UOWRep : UOWRep;
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(addSong: AddSongModel){
        const song: any = {
            name: addSong.Name,
            publishedDate: new Date().toLocaleDateString(),
        }
        if(addSong.UserId){
            song.user = addSong.UserId;
        }
        const user = await this.UOWRep.SongRepository.Add(song);
        return user;
    }

    public async GetAll(){
        return this.UOWRep.SongRepository.GetAll();
    }
}
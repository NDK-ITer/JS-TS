import { UOWRep } from '../../dataAccess/repositories/UOWRepository';
import { AddSongModel } from '../models/songModels/addSongModel';

export class SongService{
    private UOWRep : UOWRep;
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(addSong: AddSongModel): Promise<any>{
        try {
            const newSong: any = {
                name: addSong.Name,
                publishedDate: new Date().toLocaleDateString(),
            }
            const song = await this.UOWRep.SongRepository.Add(newSong);
            if(addSong.UserId!){
                const updateUser: any = {
                    $push: {
                        songs: [
                            song?._id
                        ]
                    }
                }
                await this.UOWRep.UserRepository.Update(addSong.UserId, updateUser);
                const updateSong: any = {
                    $set: {
                        user: addSong.UserId
                    }
                }
                await this.UOWRep.SongRepository.Update(song?._id, updateSong);
            }
            return {
                state: 1,
                mess: 'successful',
                song: await this.UOWRep.SongRepository.GetById(song?._id)
            };
        } catch (error) {
            return {
                state: -1,
                mess: 'Error: '+error
            };
        }
        
    }

    public async GetById(id: string): Promise<any>{
        try {
            const song = await this.UOWRep.SongRepository.GetById(id);
            if(!song){
                return{
                    state: 0,
                    mess: 'not found with id: ' + id
                }
            }
            return {
                state: 1,
                song: song,
                mess: 'have found'
            }
        } catch (error) {
            
        }
    }

    public async GetAll(){
        return this.UOWRep.SongRepository.GetAll();
    }

    public async Delete(id: string): Promise<any>{
        try {
            const dele = await this.UOWRep.SongRepository.Delete(id);
            if(!dele){
                return{
                    state: 0,
                    mess: 'fail'
                }
            }
            return{
                state: 1,
                mess: 'successful'
            }
        } catch (error) {
            return{
                state: -1,
                mess: "Error: " + error
            }
        }
    }
}
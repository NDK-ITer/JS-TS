import { UOWRep } from '../../dataAccess/repositories/UOWRepository';

export class SongService{
    private UOWRep : UOWRep;
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(data: any): Promise<any>{
        try {
            const newSong: any = {
                name: data.name,
                publishedDate: new Date().toLocaleDateString(),
            }
            const song = await this.UOWRep.SongRepository.Add(newSong);
            if(data.user! && await this.UOWRep.UserRepository.GetById(data.user)){
                const updateUser: any = {
                    $push: {
                        songs: [
                            song?._id
                        ]
                    }
                }
                await this.UOWRep.UserRepository.Update(data.user, updateUser);
                const updateSong: any = {
                    $set: {
                        user: data.user
                    }
                }
                await this.UOWRep.SongRepository.Update(song?._id, updateSong);
                const songModel: any = await this.UOWRep.SongRepository.GetById(song?._id)
                return {
                    state: 1,
                    mess: 'successful',
                    data: {
                        id: songModel._id,
                        publishedDate: song?.publishedDate,
                        name: songModel.name,
                        user: {
                            id: songModel.user._id,
                            name: songModel.user.firstName+' ' + songModel.user.lastName
                        }
                    }
                };
            }
            return {
                state: 0,
                mess: 'user with id: '+data.user+' not found',
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
            const song: any = await this.UOWRep.SongRepository.GetById(id);
            if(!song){
                return{
                    state: 0,
                    mess: 'not found with id: ' + id
                }
            }
            return {
                state: 1,
                data: {
                    id: song.id,
                    publishedDate: song?.publishedDate,
                    name: song?.name,
                    user: {
                        id: song?.user._id,
                        name: song.user.firstName+' ' + song.user.lastName
                    }
                },
                mess: 'have found'
            }
        } catch (error) {
            return {
                state: -1,
                mess: 'Error: '+error
            };
        }
    }

    public async GetAll(){
        const songs = this.UOWRep.SongRepository.GetAll();
        console.log(typeof(songs))
        let songModel: any[] = [];
        (await songs).forEach((e: any)=> {
            songModel.push({
                id: e._id,
                publishedDate: e.publishedDate,
                name: e.name,
                user: {
                    id: e.user._id,
                    name: e.user.firstName+' ' + e.user.lastName
                }
            });
        });
        return {
            state: 1,
            count: songModel.length,
            data: songModel
        };
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

    public async Update(data: any): Promise<any>{
        try {
            const songUpdate: any = await this.UOWRep.SongRepository.Update(data.id, data);
            if (!songUpdate) {
                return{
                    state: 0,
                    mess:'Not found with id: '+ data.id
                }
            }
            return{
                state: 1,
                data: {
                    id: songUpdate._id,
                    name: songUpdate.name
                }
            }
        } catch (error) {
            return{
                state: -1,
                mess: "Error: " + error
            }
        }
    }

    public async GetByUserId(userId: string): Promise<any>{
        try {
            const songWithUser = await this.UOWRep.SongRepository.Find((song) => String(song.user) === userId);
            let songModel: any[] = [];
            (await songWithUser).forEach((e: any)=> {
                songModel.push({
                    id: e._id,
                    name: e.name,
                    publishedDate: e.publishedDate
                });
            });
            return{
                state:1,
                data:songModel
            }
        } catch (error) {
            return {
                state: -1,
                mess: 'Error: '+error
            };
        }
    }

}
import { UOWRep } from '../../dataAccess/repositories/UOWRepository';

export class SongService{
    private UOWRep : UOWRep;
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(user: string, data: any): Promise<any>{
        try {
            if (!data.fileName) {
                return{
                    state: 0,
                    mess: `sound not empty`
                }
            }
            const newSong: any = {
                name: data.name,
                fileName: data.fileName,
                publishedDate: new Date().toLocaleDateString(),
            }
            const song = await this.UOWRep.SongRepository.Add(newSong);
            if (!user) {
                return{
                    state: 0,
                    mess: `user cannot be null`
                }
            }
            if(await this.UOWRep.UserRepository.GetById(user)){
                const updateUser: any = {
                    $push: {
                        songs: [
                            song?._id
                        ]
                    }
                }
                await this.UOWRep.UserRepository.Update(user, updateUser);
                const updateSong: any = {
                    $set: {
                        user: user
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
                        fileName: song?.fileName,
                        user: {
                            id: songModel.user._id,
                            name: songModel.user.firstName+' ' + songModel.user.lastName
                        }
                    }
                };
            }
            return {
                state: 0,
                mess: 'user with id: '+user+' not found',
            };
        } catch (error) {
            return {
                state: -1,
                mess: error
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
                    publishedDate: song.publishedDate,
                    name: song?.name,
                    user: {
                        id: song?.user._id,
                        name: song.user.firstName+' ' + song.user.lastName
                    }
                }
            }
        } catch (error) {
            return {
                state: -1,
                mess: error
            };
        }
    }

    public async GetAll(){
        const songs = this.UOWRep.SongRepository.GetAll();
        let songModel: any[] = [];
        (await songs).forEach((e: any)=> {
            songModel.push({
                id: e._id,
                publishedDate: e.publishedDate,
                fileName: e.fileName,
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

    public async Delete(user: string, id: string): Promise<any>{
        try {
            const song:any = await this.UOWRep.SongRepository.GetById(id);
            const fileName = song.fileName
            if (!song) {
                return {
                    state: 0,
                    mess: `not found with ${id}`
                }
            }
            if (song.user.id != user) {
                return{
                    state: 0,
                    mess: 'you cant delete'
                }
            }
            const dele = await this.UOWRep.SongRepository.Delete(id);
            if(!dele){
                
                return{
                    state: 0,
                    mess: 'fail'
                }
            }
            const dataUpdate: any = {
                $pull: {
                    songs: [
                        song.id
                    ]
                }
            }
            await this.UOWRep.UserRepository.Update(user, dataUpdate)
            return{
                state: 1,
                fileName: fileName,
                mess: 'successful'
            }
        } catch (error) {
            return{
                state: -1,
                mess: await error
            }
        }
    }

    public async Update(user: string, data: any): Promise<any>{
        try {
            const song:any = await this.UOWRep.SongRepository.GetById(data.id)
            if (song == null) {
                return{
                    state:0,
                    mess:`not found song with id: ${data.id}`
                }
            }
            if (song.user.id != user) {
                return{
                    state: 0,
                    mess: 'you cant update'
                }
            }
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
                mess: error
            }
        }
    }

    public async GetByUserId(userId: string): Promise<any>{
        try {
            const songWithUser = await this.UOWRep.SongRepository.Find((song) => String(song.user) == userId);
            let songModel: any[] = [];
            songWithUser.forEach((e: any)=> {
                songModel.push({
                    id: e._id,
                    name: e.name,
                    fileName: e.fileName,
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
                mess: error
            };
        }
    }

}
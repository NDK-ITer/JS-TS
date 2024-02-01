import { UserRepository } from './UserRepository';
import { SongRepository } from './SongRepository';

export class UOWRep {
    
    public SongRepository;
    public UserRepository;
    constructor() {
        this.SongRepository = new SongRepository();
        this.UserRepository = new UserRepository();
    }
}
import song from "../../model/entities/song";
import user from "../../model/entities/user";
import GenericRepository from "./GenericRepository";

export class UOWRep {
    
    public SongRepository;
    public UserRepository;
    constructor() {
        this.SongRepository = new GenericRepository(song);
        this.UserRepository = new GenericRepository(user);
    }
}
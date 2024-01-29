import { UserService } from './userService';
import { SongService } from "./songService";

export class UOWService {
    public SongService: SongService;
    public UserService: UserService;
    constructor() {
        this.SongService = new SongService();
        this.UserService = new UserService();
    }
}
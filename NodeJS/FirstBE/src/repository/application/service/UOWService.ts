import { UserService } from './userService';
import { SongService } from "./songService";

class UOWService {
    public static SongService: SongService = new SongService();
    public static UserService: UserService = new UserService();
    constructor() {
    }
}
export default UOWService;
import { SongService } from "./songService";
import { UserService } from "./userService";

class UOWService {
    public static SongService: SongService = new SongService();
    public static UserService: UserService = new UserService();
    constructor() {
    }
}
export default UOWService;
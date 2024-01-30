import {ISong, SongModel} from "../../model/entities/song";
import GenericRepository from "./GenericRepository";

export class SongRepository extends GenericRepository<ISong>{
    constructor() {
        super(SongModel);
    }
}

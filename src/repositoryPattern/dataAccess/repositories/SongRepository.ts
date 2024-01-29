import {song} from "../../model/entities/song";
import ISongRepository from "../../model/interface/ISongRepository";
import GenericRepository from "./GenericRepository";
import { Model } from 'mongoose';

export class SongRepository extends GenericRepository<song> implements ISongRepository {
    constructor(model: Model<song>) {
        super(model);
    }
}

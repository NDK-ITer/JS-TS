import {ISong, SongModel} from "../../model/entities/song";
import GenericRepository from "./GenericRepository";

export class SongRepository extends GenericRepository<ISong>{
    constructor() {
        super(SongModel);
    }

    public override async GetById(id: string): Promise<ISong | null> {
        return this.model.findById(id).populate('user').exec();
    }

    public GetAll(): Promise<ISong[]> {
        return this.model.find().populate('user').exec()
    }
}

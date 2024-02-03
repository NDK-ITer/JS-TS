import {IUser, UserModel} from "../../model/entities/user";
import GenericRepository from "./GenericRepository";

export class UserRepository extends GenericRepository<IUser>{
    constructor() {
        super(UserModel);
    }

    public GetById(id: string): Promise<IUser | null> {
        return this.model.findById(id).populate('songs').exec();
    }

    public GetAll(): Promise<IUser[]> {
        return this.model.find().populate('songs').exec()
    }
}
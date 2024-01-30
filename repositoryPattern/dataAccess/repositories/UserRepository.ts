import {IUser, UserModel} from "../../model/entities/user";
import GenericRepository from "./GenericRepository";

export class UserRepository extends GenericRepository<IUser>{

    constructor() {
        super(UserModel);
    }
}
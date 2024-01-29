import {user} from "../../model/entities/user";
import IUserRepository from "../../model/interface/IUserInterface";
import GenericRepository from "./GenericRepository";
import { Model, Document } from 'mongoose';

export class UserRepository extends GenericRepository<user> implements IUserRepository{

    constructor(model: Model<user>) {
        super(model);
    }
}
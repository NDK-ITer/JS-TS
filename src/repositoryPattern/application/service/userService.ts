import { AddUserModel } from '../models/userModels/addUserModel';
import { UOWRep } from "../../dataAccess/repositories/UOWRepository";

export class UserService{
    private UOWRep : UOWRep;
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(AddUserModel: AddUserModel){
        
    }
}
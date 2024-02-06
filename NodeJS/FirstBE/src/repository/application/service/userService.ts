import { UOWRep } from "../../dataAccess/repositories/UOWRepository";
import { Authenticate } from "../lib/Authenticate";
import { PasswordMethods } from "../lib/PasswordMethods";
import dotenv from 'dotenv';

dotenv.config();

export class UserService{
    private UOWRep : UOWRep;
    private secretKey: string = String(process.env.SECRET_KEY);
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(data: any): Promise<any>{
        try {
            let state: number = 0;
            const passwordHash = await PasswordMethods.HashingPassword(data.password);
            const newUser: any = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                passwordHash: passwordHash,
                born: data.born,
                role:'USER'
            }
            const user:any = await this.UOWRep.UserRepository.Add(newUser);
            if (!user) {
                state = 0
            }
            state = 1;
            return{
                state: state,
                data: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    born: user.born,
                    passwordHash: user.passwordHash
                }
            }
        } catch (error) {
            return {
                state: -1,
                mess: 'Error: '+ error
            };
        }
    }

    public async GetById(id: string): Promise<any>{
        try {
            let state: number = 0;
            const user:any = await this.UOWRep.UserRepository.GetById(id);
            if (!user) {
                state = 0;
            }
            state = 1;
            let songModel: any[] = [];
            if (user.songs) {
                (await user.songs).forEach((e: any)=> {
                    songModel.push({
                        id: e._id,
                        publishedDate: e.publishedDate,
                        name: e.name,
                    });
                });
            }
            
            return{
                state: state,
                data:{
                    id: user?._id,
                    FirstName: user.firstName,
                    LastName: user.lastName,
                    role: user.role,
                    listSong: songModel
                }
            }
        } catch (error) {
            return {
                state: -1,
                mess: 'Error: '+ error
            };
        }
    }

    public async GetJWT(data: any): Promise<any>{
        try {
            const found = await this.UOWRep.UserRepository.Find(u => u.email === data.email);
            if (!found) {
                return{
                    state: 0,
                    mess: 'not found user with email: ' + data.email
                }
            }
            const user:any = found[0]
            if (await PasswordMethods.ComparePasswords(data.password, user.passwordHash)) {
                const jwt = await Authenticate.GenerateJWT({
                    id: user._id,
                    role: user.role
                }, this.secretKey);
                return{
                    state: 1,
                    jwt: jwt,
                    data:{
                        id: user._id,
                        userName: user.firstName + ' ' + user.lastName,
                        role: user.role
                    }
                }
            }
            return{
                state: 0,
                mess: 'wrong password'
            }
        } catch (error) {
            return {
                state: -1,
                mess: 'Error: '+ error
            };
        }
        
    }

    public async Edit(data: any): Promise<any>{
        try {
            let userEdit: any = {
                firstName: data.firstName,
                lastName: data.lastName
            }
            const user:any = await this.UOWRep.UserRepository.Update(data.id, userEdit);
            return{
                state: 1,
                data: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                }
            }
        } catch (error) {
            return {
                state: -1,
                mess: 'Error: ' + error
            };
        }
    }
}
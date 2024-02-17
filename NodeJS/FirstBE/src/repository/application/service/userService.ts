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
            const born = new Date(data.born)
            const userAvailable = await this.UOWRep.UserRepository.Find(u => u.email == data.email);
            if (userAvailable.length != 0) {
                return{
                    state: state,
                    mess: `email ${data.email} has existed`
                }
            }
            const passwordHash = await PasswordMethods.HashingPassword(data.password);
            const newUser: any = {
                firstName: data.firstName.trim(),
                lastName: data.lastName.trim(),
                avatar: data.avatarName,
                email: data.email,
                specialName: data.specialName,
                passwordHash: passwordHash,
                born: born,
                role:'USER'
            }
            const user:any = await this.UOWRep.UserRepository.Add(newUser);
            if (!user) {
                state = 0
            }
            state = 1;
            const result = await this.GetJWT({
                email: user.email,
                password: data.password
            })
            return result
        } catch (error) {
            console.log(error)
            return {
                state: -1,
                mess: error
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
            if (user.songs != null) {
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
                    id: user._id,
                    FirstName: user.firstName,
                    LastName: user.lastName,
                    avatar: user.avatar,
                    role: user.role,
                    listSong: songModel
                }
            }
        } catch (error) {
            return {
                state: -1,
                mess: error
            };
        }
    }

    public async GetJWT(data: any): Promise<any>{
        try {
            const found = await this.UOWRep.UserRepository.Find(u => u.email == data.email);
            if (!found || found.length == 0) {
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
                }, this.secretKey, '7d');
                return{
                    state: 1,
                    jwt: jwt,
                    data:{
                        userName: user.firstName + ' ' + user.lastName,
                        specialName: user.specialName,
                        avatar: user.avatar,
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
                mess: error
            };
        }
        
    }

    public async Edit(userId: string, data: any): Promise<any>{
        try {
            if (!userId) {
                return{
                    state: 0,
                    mess: `userID is null`
                }
            } else if(!data) {
                return{
                    state: 0,
                    mess: `data is null`
                }
            }
            let userEdit: any = {
                firstName: data.firstName.trim(),
                lastName: data.lastName.trim(),
                specialName: data.specialName,
                avatar: data.avatarName
            }
            const user:any = await this.UOWRep.UserRepository.Update(userId, userEdit);
            if (!user) {
                return{
                    state: 0,
                    mess: `user with id ${userId} is not exist`
                }
            }
            return{
                state: 1,
                data: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    specialName: user.specialName
                }
            }
        } catch (error) {
            return {
                state: -1,
                mess: error
            };
        }
    }

    public async GetAll(): Promise<any>{
        try {
            const allUser = this.UOWRep.UserRepository.GetAll();
            let userModel: any[] = [];
            (await allUser).forEach((e: any) =>{
                userModel.push({
                    id: e._id,
                    userName: `${e.firstName} ${e.lastName}`,
                    specialName: e.specialName,
                    songs: e.songs
                });
            });
            return{
                state: 1,
                data: userModel
            }
        } catch (error) {
            return {
                state: -1,
                mess: error
            };
        }
    }

    public async GetInformation(id : string): Promise<any>{
        try {
            let state: number = 0;
            const user:any = await this.UOWRep.UserRepository.GetById(id);
            if (!user) {
                state = 0;
            }
            
            state = 1;
            let songModel: any[] = [];
            if (user.songs != null) {
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
                    id: user._id,
                    FirstName: user.firstName,
                    LastName: user.lastName,
                    avatar: user.avatar,
                    role: user.role,
                    listSong: songModel
                }
            }
        } catch (error) {
            return {
                state: -1,
                mess: error
            };
        }
    }
}
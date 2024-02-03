import { UOWRep } from "../../dataAccess/repositories/UOWRepository";
import { PasswordMethods } from "../lib/PasswordMethods";



export class UserService{
    private UOWRep : UOWRep;
    private state: any;
    constructor() {
        this.UOWRep = new UOWRep();
    }

    public async Create(data: any): Promise<any>{
        try {
            const passwordHash = await PasswordMethods.HashingPassword(data.password)
            if (passwordHash.state == 0) {
                return{
                    state: 0,
                    mess: passwordHash.mess
                }
            }
            const newUser: any = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                passwordHash: passwordHash.result,
                born: data.born,
            }
            const user:any = await this.UOWRep.UserRepository.Add(newUser);
            if (!user) {
                this.state = 0
            }
            this.state = 1;
            return{
                state: this.state,
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
}
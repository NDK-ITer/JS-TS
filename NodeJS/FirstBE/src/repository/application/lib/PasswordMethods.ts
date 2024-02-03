import bcrypt from 'bcrypt';

export class PasswordMethods {
    
    static async HashingPassword(plaintextPassword: string): Promise<any>{
        const saltRounds = 20;
        let state, error, hash: any;
        bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
            if (err) {
                state = 0;
                error = err
            } else {
                state = 1;
                hash = String(hash)
            }
        });
        return{
            state: state,
            result: hash,
            err: error
        }
    }
}
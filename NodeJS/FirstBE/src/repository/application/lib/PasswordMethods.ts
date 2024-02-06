import bcrypt from 'bcrypt';

export class PasswordMethods {
    
    static async HashingPassword(plaintextPassword: string): Promise<any>{
        const saltRounds = 10;
        return new Promise((resolve, reject) => {
            bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
                if (err) {
                    // Sử dụng reject để báo hiệu rằng có lỗi xảy ra
                    reject(err);
                } else {
                    // Sử dụng resolve để báo hiệu rằng Promise đã hoàn thành thành công
                    resolve(hash);
                }
            });
        });
    }

    static async ComparePasswords(enteredPassword: string, hashedPassword: string): Promise<any> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(enteredPassword, hashedPassword, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}
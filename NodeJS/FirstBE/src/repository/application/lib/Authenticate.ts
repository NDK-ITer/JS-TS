import * as jwt from 'jsonwebtoken';


export class Authenticate{
    static async GenerateJWT(data: any, secretKey: string, expiresIn: string): Promise<any>{
        const payload = {
            id: data.id,
            role: data.role
        }
        const token = jwt.sign(payload, secretKey, { expiresIn });
        return token;
    }

    static async VerifyAndDecodeJWT(token: string, secretKey: string): Promise<any>{
        try {
            const decoded = jwt.verify(token, secretKey);
            return decoded;
        } catch (error) {
            console.error('Invalid token');
            return null;
        }
    }
}
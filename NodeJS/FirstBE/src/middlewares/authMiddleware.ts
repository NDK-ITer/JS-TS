import { Response, NextFunction } from 'express';
import { Authenticate } from '../repository/application/lib/Authenticate';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = String(process.env.SECRET_KEY)

export class AuthMiddleware{
    static async AuthenticateJWT(req: any, res: Response, next: NextFunction){
        const token = String((req.headers as any).authorization).split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - No token provided' });
        }
        const decodedUser = await Authenticate.VerifyAndDecodeJWT(token, secretKey);
        if (!decodedUser) {
            return res.status(403).json({ message: 'Forbidden - Invalid token' });
        }
        req.user = decodedUser
        next();
    }

    static async IsUser(req: any, res: Response, next: NextFunction){
        const user = req.user
        if (user.role != 'USER') {
            return res.status(403).json({ message: 'Forbidden - Invalid token' });
        }
        next()
    }

    static async IsAdmin(req: any, res: Response, next: NextFunction){
        const user = req.user
        if (user.role != 'ADMIN') {
            return res.status(403).json({ message: 'Forbidden - Invalid token' });
        }
        next()
    }
}
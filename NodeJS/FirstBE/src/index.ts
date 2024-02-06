import { connectDB } from "./repository/dataAccess/access";
import authRoute from "./routes/authRoute";
import songRoute from "./routes/songRoute";
import userRoute from "./routes/userRoute";
import path from 'path';

const express = require('express');
const body = require('body-parser');
const imagePath  = path.join(__dirname, 'public/images');
const soundPath  = path.join(__dirname, 'public/sounds');

async function start() {
    try {
        let port = Number(process.env.PORT)
        const app = express();
        connectDB();
        app.use(body.json({
            limit: '500kb'
        }));

        // Routes
        app.use('/v1/song', songRoute);
        app.use('/v1/auth', authRoute);
        app.use('/v1/user', userRoute);
        app.use('/images', express.static(imagePath));
        app.use('/sounds', express.static(soundPath));
        //
        app.get('/public',(req:any, res:Response)=>{res.json()});
    
        // Start server
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}/`);
        });
    }
    catch(error) {
        console.log(error);
    }
}

start();
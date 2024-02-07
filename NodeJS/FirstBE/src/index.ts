import { connectDB } from "./repository/dataAccess/access";
import { publicPath } from "./constants";
import authRoute from "./routes/authRoute";
import songRoute from "./routes/songRoute";
import userRoute from "./routes/userRoute";
import cors from 'cors';

const express = require('express');
const body = require('body-parser');

async function start() {
    try {
        let port = Number(process.env.PORT)
        const app = express();
        connectDB();
        app.use(body.json({
            limit: '500kb'
        }));
        //CORS
        const corsOptions = {
            origin: 'http://localhost:3000', 
            optionsSuccessStatus: 200 
        }
        
        app.use(cors(corsOptions));
        // Routes
        app.use('/v1/song', songRoute);
        app.use('/v1/auth', authRoute);
        app.use('/v1/user', userRoute);
        app.use('/', express.static(publicPath));
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
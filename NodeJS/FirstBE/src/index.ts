import { connectDB } from "./repository/dataAccess/access";
import authRoute from "./routes/authRoute";
import songRoute from "./routes/songRoute";
import userRoute from "./routes/userRoute";

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

        // Routes
        app.use('/v1/song', songRoute);
        app.use('/v1/auth', authRoute);
        app.use('/v1/user', userRoute);
        app.get('/',(req:any, res:Response)=>{res.json()});
    
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
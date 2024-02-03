import { connectDB } from "./repository/dataAccess/access";
import authRoute from "./routes/authRoute";
import songRoute from "./routes/songRoute";

const express = require('express');
const body = require('body-parser');

async function start() {
    try {
        const app = express();
        connectDB();
        app.use(body.json({
            limit: '500kb'
        }));

        // Routes
        app.use('/v1/song', songRoute);
        app.use('/v1/auth', authRoute);
        app.get('/',(req:any, res:any)=>{res.json("hello")});
    
        // Start server
        app.listen(7000, () => {
            console.log('Server is running on port 3000');
        });
    }
    catch(error) {
        console.log(error);
    }
}

start();
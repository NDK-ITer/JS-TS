const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv')
var bodyParser = require('body-parser');

//connect db
const dbName = 'test';
const connectString = 'mongodb://127.0.0.1/' + dbName;
mongoose.connect(connectString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=> console.log('Db connecting is successful'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors());

app.use(morgan('common'));

// app.get('/', (req, res)=>{
//     res.json('hello word')
// });

module.exports = app;
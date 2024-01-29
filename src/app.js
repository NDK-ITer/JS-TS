const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const songRoute = require('./routes/songRoute');

//connect db
const dbName = 'test';
const connectString = 'mongodb://127.0.0.1:27017/' + dbName;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
mongoose.connect(connectString, options)
        .then(() => console.log('Db connecting is successful'))
        .catch(err => console.error('Error:', err));

//add 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('common'));

//add router
app.use("/v1/song", songRoute);
//

module.exports = app;
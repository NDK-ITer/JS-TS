const mongoose = require('../data/data-access')

const user_schema = new mongoose.Schema({
    username: String,
    password : String,
    email: String,
    phone_number: String,
},{
    collection: 'user'
});

const userModel = mongoose.model('user', user_schema);  

module.exports = userModel;
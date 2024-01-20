const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/initialProject-nodejs', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

module.exports = mongoose;

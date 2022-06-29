const mongoose = require('mongoose');
require('dotenv').config();
var mongoDB = process.env.DATABASE_URL;

mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, {useNewUrlParser: true}).then(() => {
    console.log('Connected to Mongodb successfully');
}).catch((e) => {
    console.log('Error while attempting to connect to mongodb');
    console.log(e);
})



module.exports = {
    mongoose
};
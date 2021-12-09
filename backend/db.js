const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = async() => {
    mongoose.connect(mongoURL,  {useNewUrlParser: true}, ()=> {
        console.log("Connected to Mongo Successfully!");
    })
}

module.exports = connectToMongo;
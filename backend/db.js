const mongoose = require('mongoose');
//const mongoURL = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURL = "mongodb+srv://mohit_maroliya:Zker42FNU.buD_E@authlogin-db-cluster.nrdf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectToMongo = async() => {
    mongoose.connect(mongoURL,  {useNewUrlParser: true}, ()=> {
        console.log("Connected to Mongo Successfully!");
    })
}

module.exports = connectToMongo;
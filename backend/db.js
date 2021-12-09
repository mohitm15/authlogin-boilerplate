//import { MongoClient } from 'mongodb';
const MongoClient = require('mongodb');

let client;

const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
    return client;
}

const getDbConnection = dbName => {
    const db =  initializeDbConnection().db(dbName);
    return db;
}

module.exports =getDbConnection;
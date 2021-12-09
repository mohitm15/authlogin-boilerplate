const initializeDbConnection = require('./db');
const express = require('express');

const PORT = 8080;

const app = express();


app.use(express.json());

initializeDbConnection()
    .then(()=> {
        app.listen(PORT, ()=> {
            console.log(`Server is listening on port ${PORT}`);
        });
    });
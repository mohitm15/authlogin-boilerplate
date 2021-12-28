const connectToMongo = require('./db');
const express = require('express');


connectToMongo();
var cors = require('cors');
const app = express();
const PORT = 5000;


//to use req body 
app.use(cors())
app.use(express.json());

//Available routes
app.use('/api/signup',require('./routes/signupRoute'));
app.use('/api/login',require('./routes/loginRoute'));
app.use('/api/forgotPassword',require('./routes/forgotPasswordRoute'));
app.use('/api/changePassword',require('./routes/changePasswordRoute'));

app.listen(PORT, ()=> {
    console.log(`Server listening at http://localhost:${PORT}`)
})
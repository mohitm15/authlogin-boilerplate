const express = require("express");
const router = express.Router();
const User = require("../models/User");


//ROUTE 3 :Forgot Password of a User :POST - "/api/forgotPassword"

router.post(
    "/",
    
    async (req,res)=> {

        const {email, forgetQues, forgetAns } = req.body;

        let success = false;

        try {
            let user =  await User.findOne({email});

            if(!user) {
                res.status(400).json({success, error: "Email does not exists!"});

            }

            if( forgetQues === user.forgetQues && forgetAns === user.forgetAns) {
                success = true;
                res.json({success, forgetQues, forgetAns})
            }
            else{
                res.json({success,error:"Either of forgotQues or forgotAns is incorrect"})
            }
        }
        catch(error) {
            console.log(error.message);
            res.status(500).send("Internal Server Error")
        }
    }
);

module.exports = router;
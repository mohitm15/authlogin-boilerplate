const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mohitisagood$boy";

//ROUTE 2 :Authenticating a User :POST - "/api/login"

router.post(
    "/",
  
    body("email", "Enter a valid email").isEmail(),
  
    async (req, res) => {
      //If there are errors, then return bad request + Errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
      
      let success = false;
  
      try {
        let user = await User.findOne({ email });
  
        // console.log("user - "+user)
  
        if (!user) {
          res.status(400).json({success,error:"Login with correct credentials!"});
        }
  
        //compare the pwd bw 'hash of pwd entered' & 'hash from your pwdDB'
        const passwordCompare = await bcrypt.compare(password, user.password);
  
        if (!passwordCompare) {
          res.status(400).json({success,error:"Login with correct credentials!"});
        }
        //nodemon crashes whenever PASSWORD === NULL
  
  
        const payload = {
          user: {
            id: user.id,
          },
        };
  
        const authToken = jwt.sign(payload, JWT_SECRET);
        
        success = true;
        res.json({ success, authToken, user });
      } 
      catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
      }
    }
  );

  module.exports = router;
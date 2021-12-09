const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mohitisagood$boy";

//ROUTE 1 :Creating a User :POST - "/api/signup/"
router.post("/",
    [
      body("name", "Name must have at least 3 characters").isLength({ min: 3 }),
      body("email", "Enter a valid email").isEmail(),
    ],
    async (req, res) => {
  
      let success = false;
      //If there are errors, then return bad request + Errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
      }
  
      try {
        //Check whether email exists
        let user = await User.findOne({ email: req.body.email });
        //console.log("user.email = " + user);
        if (user) {
          //console.log(user.email);
          return res.status(400).json({success, error: "Email Already Taken" });
        }
  
        //hashing the password here
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        //user is created
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
          role: req.body.role,
        });
  
        //passing the id as data to make jwt token
        const data = {
          user: {
            id: user.id,
          },
        };
  
        const authToken = jwt.sign(data, JWT_SECRET);
        //console.log(authToken)
  
        
        success = true;
        //res.json(user);
        res.json({success, authToken });
      } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error");
      }
    }
  );

  module.exports = router;
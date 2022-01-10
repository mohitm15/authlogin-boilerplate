const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "mohitisagood$boy";
const User = require("../models/User");

router.put("/", async (req, res) => {
  const { email, newPassword, confmNewPassword } = req.body;

  let success = false;

  try {
    //hashing the new password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(newPassword, salt);

    //if newpassword does not matche swoth confirmPassword
    if (newPassword !== confmNewPassword) {
      res.status(400).json({ success, error: "Both password did not match !" });
    }

    //updating password
    let user = await User.findOneAndUpdate(
      { email: email },
      { $set: { password: secPass } },
      { returnOriginal: false }
    );

    if (!user) {
      res.status(400).json({ success, error: "Email does not exists !" });
    }

    //console.log(user);

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };

    const authToken = jwt.sign(payload, JWT_SECRET);

    success = true;

    res.json({ success, authToken, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

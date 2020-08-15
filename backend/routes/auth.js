const express = require('express');
const router = express.Router();
const {signUp, signIn} = require("../controller/authController")

// router.get('/protected', requireLogin, (req, res) => {
//     res.send("Hello user");
// })

// Sign Up 
router.post('/signup',signUp)

// Sign In
router.post('/signin', signIn)


module.exports = router
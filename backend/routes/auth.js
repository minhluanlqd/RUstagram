const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const requireLogin = require('../middleware/requireLogin');

const JWTSecret = "823uienvujbvp4g936967**/398u8t43";

router.get('/', (req, res) => {
    res.send("Hello");
})

// router.get('/protected', requireLogin, (req, res) => {
//     res.send("Hello user");
// })

// Sign Up 
router.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error: "Please fill in all the fields"});
    }
    User.findOne({email: email})
        .then((savedUser) => {
            if(savedUser){
                return res.status(422).json({error: "User is already exist"});
            }
            bcrypt.hash(password, 12) // hashing password
                .then((hashedPassword) => {
                    const user = new User({
                        email,
                        password: hashedPassword,
                        name
                    })
                    user.save().then(user => {
                        res.json({message: "Saved successfully"})
                    })
                    .catch(error => console.log(error));
                })
        })
        .catch(error => console.log(error))
    // res.json({message: "Successfully sent"})
})

// Sign In
router.post('/signin', (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).json({error: "Please fill in all the fields"});
    }
    User.findOne({email: email})
        .then(savedUser => {
            if(!savedUser){
                return res.status(422).json({error: "Invalid email or password"});
            }
            bcrypt.compare(password, savedUser.password)
                .then(isMatched => {
                    if(isMatched){
                        // res.json({message: "Successfully sign in"});
                        const token = jwt.sign({_id: savedUser._id}, JWTSecret, {expiresIn: '2h'});
                        const {_id, email, name} = savedUser;
                        res.json({token, user:{_id, email, name}})
                    }else{
                        return res.status(422).json({error: "Invalid email or password"});
                    }
                })
                .catch(error => console.log(error));
        })
        
})
module.exports = router
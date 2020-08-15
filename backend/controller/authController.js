const jwt = require('jsonwebtoken');
const JWTSecret = "823uienvujbvp4g936967**/398u8t43";
const User = require("../models/user");
const bcrypt = require('bcryptjs');


exports.signIn = (req, res) => {
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
}


exports.signUp = (req, res) =>{
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
}


exports.requireLogin = (req, res, next) =>{

    let token;
    if (req.headers.authorization) {
        token = req.headers.authorization;
    }
    // authorization
    if(token == null){
        return res.status(401).json({error: "You must be logged in"});
    }
    jwt.verify(token, JWTSecret, (err, payload) => {
        if(err){
            return res.status(401).json({error: "You must be logged in"});
        }
        const {_id} = payload;
        User.findById(_id).then(userData => {
            req.user = userData;
            next();
        })
    })

}
const jwt = require('jsonwebtoken');
const JWTSecret = "823uienvujbvp4g936967**/398u8t43";
const mongoose = require('mongoose');
const User = require("../models/user");

module.exports = (req, res, next) => {
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
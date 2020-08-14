const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const requireLogin = require('../middleware/requireLogin');

// Get all post from the server
router.get('/allpost', requireLogin,(req, res) => {
    Post.find()
        .populate("postedBy", "_id name")
        .then(posts => {
            res.json({posts})
        })
        .catch(error => console.log(error));
})

// Create post route
router.post('/createpost', requireLogin,(req, res) => {
    const {title, body, pic} = req.body;
    if(!title || !body || !pic){
        return res.status(422).json({error: "Please add all the fields"});
    }
    req.user.password = undefined; // hide the password
    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy: req.user
    })
    post.save().then(result => {
        res.json({post: result});
    }).catch(error => console.log(error));
})

// Get personal post from specific user
router.get('/mypost', requireLogin,(req, res) => {
    Post.find({postedBy: req.user._id})
        .populate("postedBy", "_id name")
        .then(myPost => {
            res.json({myPost});
        })
        .catch(error => console.log(error));
})

module.exports = router;
const express = require('express');
const router = express.Router();
const {requireLogin} = require("../controller/authController")
const {getAllPost, createPost, getMyPost} = require ("../controller/postController.js")

// Get all post from the server
router.get('/allpost', requireLogin, getAllPost);

// Create post route
router.post('/createpost', requireLogin, createPost);

// Get personal post from specific user
router.get('/mypost', requireLogin, getMyPost)

module.exports = router;
const Post = require("../models/post");

exports.getAllPost = (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((error) => console.log(error));
};

exports.createPost = (req, res) => {
  const { title, body, pic } = req.body;
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  req.user.password = undefined; // hide the password
  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((error) => console.log(error));
};

exports.getMyPost = (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((myPost) => {
      res.json({ myPost });
    })
    .catch((error) => console.log(error));
};

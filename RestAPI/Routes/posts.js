const express = require("express");
const router = express.Router();
const Post = require("../Models/post");

//Routes Sync way
router.get("/", (req, res) => {
  res.send("we are home");
});

// Routes ASync way get back all the post
router.get("/", async (req, res) => {
  try {
    const posts = await post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//Sync way
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//ASync way submitt the post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Routes ASync way get back specifique post
router.get("/:postId", async (req, res) => {
  try {
    const post = await post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a specifique post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});
//delete a specifique post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

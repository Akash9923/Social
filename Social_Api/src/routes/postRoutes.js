const express = require("express");
const { isValidObjectId } = require("mongoose");
const Post = require("../models/Post");

const router = new express.Router();

router.post("/posts", async (req, res) => {
  const posts = new Post(req.body);
  try {
    await posts.save();
    res.status(201).send({ posts });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const users = await Post.find({});
    res.send(users);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get("/posts/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    if (!isValidObjectId(_id)) {
      return res.status(400).send({
        message: "Invalid id",
      });
    }
    const post = await Post.findById(_id).populate("creadtedBy");

    if (!post) {
      return res.status(404).send();
    }
    res.send(post);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get("/posts/byuserId/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    if (!isValidObjectId(_id)) {
      return res.status(400).send({
        message: "Invalid id",
      });
    }
    const post = await Post.find({ creadtedBy: _id }).populate("creadtedBy");

    if (!post) {
      return res.status(404).send();
    }
    res.send(post);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send();
    }

    res.send(post);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = router;

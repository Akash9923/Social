const express = require("express");
const { isValidObjectId } = require("mongoose");
const Comment = require("../models/Comment");

const router = new express.Router();

router.post("/comments", async (req, res) => {
  const comments = new Comment(req.body);
  try {
    await comments.save();
    res.status(201).send({ comments });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/comments", async (req, res) => {
  try {

    const comments = await Comment.find({});
    res.send(comments);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

router.get("/comments/bypostid/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    if (!isValidObjectId(_id)) {
      return res.status(400).send({
        message: "Invalid id",
      });
    }
    const comments = await Comment.find({postId:_id});

    if (!comments) {
      return res.status(404).send();
    }
    res.send(comments);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});


 

module.exports = router;

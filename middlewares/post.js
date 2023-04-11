const mongoose = require('mongoose');
require("dotenv").config();

const isValidObjectId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Invalid ID');
  }
  next();
};

const checkPostExists = async (req, res, next) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  if (!post) {
    return res.status(404).send('Post not found');
  }
  req.post = post;
  next();
};

module.exports = {
  isValidObjectId,
  checkPostExists,
};
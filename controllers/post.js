const Post = require('../models/post');
require("dotenv").config();

const createPost = async (req, res) => {
  const { title, description } = req.body;
  try {
    const post = await Post.create({ title, description });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPosts = async (res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).send('Post not found');
  }
};

const updatePost = async (req, res) => {
  const post = req.post;
  const { title, description, completed } = req.body;
  try {
    post.title = title || post.title;
    post.description = description || post.description;
    post.completed = completed === undefined ? post.completed : completed;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePost = async (req, res) => {
  const post = req.post;
  try {
    await post.remove();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const likePost = async (req, res) => {
  const post = req.post;
  try {
    post.likes += 1;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getLikedPosts = async (res) => {
  try {
    const posts = await Todo.find({ likes: { $gt: 0 } });
    res.json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  likePost,
  getLikedPosts,
};
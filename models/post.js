const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now,},
  likes: { type: Number, default: 0 }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
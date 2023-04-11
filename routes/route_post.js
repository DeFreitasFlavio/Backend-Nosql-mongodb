const express = require("express");

// Import du controller post pour gérer les actions.
const postCtrl = require("../controllers/post");
const middleware = require("../middlewares/post");

const router = express.Router();

// /api/posts/routeActionController.
router.post('/createPost', postCtrl.createPost);
router.delete('/deletePost', postCtrl.deletePost);
router.put('/updatePost', postCtrl.updatePost);
router.get('/getAllPosts', postCtrl.getPosts);
router.get('/getOnePost/:id', middleware.isValidObjectId, middleware.checkPostExists, postCtrl.getPost);
router.put('/:id/like', middleware.isValidObjectId, middleware.checkPostExists, postCtrl.likePost);
router.get('/liked', postCtrl.getLikedPosts);

const express = require('express');
const VideoController = require('../controller/videoController');
const ProductController = require('../controller/productController');
const CommentController = require('../controller/commentController');
const UserController = require('../controller/userController');

const router = express.Router();

router.get('/', VideoController.getVideos);
router.get('/:videoID/products', ProductController.getProducts);
router.get('/:videoID/comments', CommentController.getComments);
router.get('/group/:groupBy', VideoController.groupVideos);

router.post('/', VideoController.addVideo);
router.post('/:videoID/products', ProductController.addProduct);
router.post('/:videoID/comments', CommentController.addComment);
router.post('/login', UserController.login);
router.post('/register', UserController.register);

router.delete('/:videoID', VideoController.deleteVideo);

module.exports = router;
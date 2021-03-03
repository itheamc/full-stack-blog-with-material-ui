const express = require('express');
const { getPosts, savePost, updatePost, deletePost } = require('../controllers/posts_controllers')

const router = express.Router();


router.get('/', getPosts);          // Get Request
router.post('/', savePost);         // Post Request
router.patch('/:_id', updatePost);  // Patch Request
router.delete('/:_id', deletePost)  // Delete Request



module.exports = router;
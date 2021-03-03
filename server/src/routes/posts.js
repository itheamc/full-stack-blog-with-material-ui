const express = require('express');
const { getPosts, savePost } = require('../controllers/posts_controllers')

const router = express.Router();

router.get('/', getPosts);
router.post('/', savePost);


module.exports = router;
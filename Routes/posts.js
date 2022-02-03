const express = require('express');
const router = express.Router();
const Post = require('../models/post')


//get back all the posts
router.get('/', async (req,res) => {
    const posts = await Post.find();
    res.json(posts);
});

//submits a post
router.post('/', async (req,res) => {
    const post = new Post({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        position: req.body.position
    });

    const savedPost = await post.save();
    res.json(savedPost);
});

//specific post
router.get('/:postId', async (req,res) => {
    const post = await Post.findById(req.params.postId);
    res.json(post)
})

//delete post
router.delete('/:postId', async (req,res) => {
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
});


module.exports = router;
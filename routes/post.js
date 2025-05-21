const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.id },
            { $set: { title: req.body.title, description: req.body.description } }
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;// Export the rout

router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(400).json({ message: "Error de conexion" });
    }
});

const express = require('express')
const router = express.Router()
const Posts = require('../models/Post')

router.get('/', async (req, res) => {
    try {
        const allPosts = await Posts.find();

        res.json(allPosts)
    } catch (e) {
        res.json(e)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const searchedPost = await Posts.findById(req.params.id)

        res.json(searchedPost)
    } catch (e) {
        res.json({ err: e })
    }
})

router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPosts = await post.save()

        res.json(savedPosts)
    } catch (e) {
        res.json(e)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Posts.remove({
            _id: req.params.id
        })

        res.json(deletedPost)
    } catch (e) {
        res.json({ err: e })
    }

})

module.exports = router
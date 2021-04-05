const router = require('express').Router()

router.get('/', (req, res, err) => {
    
    const Posts = require('../models/posts')

    res.render('index', {
        title: 'INDEX',
        posts: Posts.getAll()
    })
})

module.exports = router
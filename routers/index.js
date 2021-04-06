const router = require('express').Router()
const session = require('express-session')
const Users = require('../models/users')

router.get('/', (req, res, err) => {
    
    console.log("Index " + req.session.user)
    //req.session.user = undefined

    const Posts = require('../models/posts')

    res.render('index', {
        title: 'INDEX',
        posts: Posts.getAll(),
        user: req.session.user
    })
})

module.exports = router
const router = require('express').Router()
const session = require('express-session')
const Users = require('../models/users')

router.get('/', (req, res, err) => {
    
    console.log(req.session.user)

    const user = Users.getUser('marat.bulatov@mail.ru', '')

    if (user) {
        req.session.user = user
    }

    const Posts = require('../models/posts')

    res.render('index', {
        title: 'INDEX',
        posts: Posts.getAll()
    })
})

module.exports = router
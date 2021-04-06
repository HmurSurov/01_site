const router = require('express').Router()
const session = require('express-session')
const Users = require('../models/users')
const Posts = require('../models/posts')

router.get('/', (req, res, err) => {
    
    const email = req.query['email']
    const password = req.query['password']

    console.log("Auth " + req.session.user)

    if (!(req.session.user) && email && password) {
        const user = Users.getUser(email, password)

        if (user) {
            req.session.user = user
        }
    }

    res.redirect('/')
})

module.exports = router
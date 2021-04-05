const router = require('express').Router()

router.get('/', (req, res, err) => {
    res.render('index', {
        title: 'INDEX'
    })
})

module.exports = router
const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-hbs')
const path = require('path')

app.use(express.static(path.resolve(__dirname, 'public')))

const indexRouter = require('./routers/index')

app.engine('hbs', exphbs.express4({
    defaultLayout: path.resolve(__dirname, 'layouts', 'main.hbs'),
    partialsDir: path.resolve(__dirname, 'views', 'partial')
}))
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log('App has been started')
})
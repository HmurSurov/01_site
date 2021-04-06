const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-hbs')
const path = require('path')
const session = require('express-session')


app.use(express.static(path.resolve(__dirname, 'public')))

app.use(session({
    secret: 'GfghGHfh^&gv%vhj6%Fjvj',   // секретное слово для шифрования
    key: 'key',             // имя куки
    cookie: {
        path: '/',          // где действует
        httpOnly: true,     // чтобы куку не могли читать на клиенте
        maxAge: null        // время жизни куки
    },
    saveUninitialized: false,   // on default
    resave: false               // on  default
}))

const indexRouter = require('./routers/index')
const authRouter = require('./routers/auth')

app.engine('hbs', exphbs.express4({
    defaultLayout: path.resolve(__dirname, 'layouts', 'main.hbs'),
    partialsDir: path.resolve(__dirname, 'views', 'partial')
}))

app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/', indexRouter)
app.use('/auth/', authRouter)

app.listen(PORT, () => {
    console.log('App has been started')
})
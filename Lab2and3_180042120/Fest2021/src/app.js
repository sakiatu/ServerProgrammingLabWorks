require('dotenv').config()
const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const passport = require('passport')
require('../config/passport')(passport)
const app = express()

mongoose.connect(process.env.MongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('connected to database successfully!')
}).catch(e=>{
    console.log('failed to connect to database',e)
})

app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'sessionSecret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

const baseRoute = require('../routes/index')
const usersRoute = require('../routes/users')
app.use(baseRoute)

app.use('/users', usersRoute)

app.use(express.static('public'))
app.set('view engine', 'ejs')



module.exports = app
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const passport = require('passport')


const getLogin = (req, res) => {
    res.render('users/login.ejs', {error: req.flash('error')})
}

const postRegister = (req, res) => {
    const {name, email, password, confirm_password} = req.body

    const errors = []

    if (!name || !email || !password || !confirm_password)
        errors.push('All fields are required!')
    if (password.length < 6)
        errors.push('Password must have at least 6 characters')
    if (password !== confirm_password)
        errors.push('passwords dont match')

    if (errors.length > 0) {
        req.flash('errors', errors)
        console.log(errors)
        res.redirect('/users/register')
    } else {
        //create user
        User.findOne({email}).then(user => {
            if (user) {
                errors.push('Email is already registered!')
                req.flash('errors', errors)
                res.redirect('/users/register')
            } else {
                bcrypt.genSalt(10, (error, salt) => {
                    if (error) {
                        errors.push(error)
                        req.flash('errors', errors)
                        res.redirect('/users/register')
                    } else {
                        bcrypt.hash(password, salt, (error, hash) => {
                            if (error) {
                                errors.push(error)
                                req.flash('errors', errors)
                                res.redirect('/users/register')
                            } else {
                                const user = new User({
                                    name, email, password: hash
                                })
                                user.save().then(() => {
                                    res.redirect('/users/login')
                                }).catch(() => {
                                    errors.push('failed to create user in database')
                                    req.flash('errors', errors)
                                    res.redirect('/users/register')
                                })
                            }
                        })
                    }
                })
            }
        })

    }
}

const postLogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)
}

const getRegister = (req, res) => {
    res.render('users/register.ejs', {errors: req.flash('errors')})

}

const getLogout = (req, res) => {
    req.logout()
    res.redirect('/')
}

module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister,
    getLogout
}
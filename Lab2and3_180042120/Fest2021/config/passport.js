const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

module.exports = (passport)=>{
    passport.use(new LocalStrategy({usernameField:'email'},(email,password,done)=>{
        //match user
        User.findOne({email}).then((user)=>{
            if(!user)
                return done(null,false,{message:'this email is not registered!'})
            else{
                //match password
                bcrypt.compare(password,user.password,(error,isMatched)=>{
                    if(error) throw error
                    if(isMatched) return done(null,user)
                    else return done(null,false,{message:'authentication failed!'})
                })
            }
        }).catch(e=>{
            console.log(e)
        })
    }))
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })

    passport.deserializeUser((id,done)=>{
        User.findById(id,(error,user)=>{
            done(error,user)
        })
    })
}
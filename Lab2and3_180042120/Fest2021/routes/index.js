const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

router.get('/',(req,res)=>{
    res.render('welcome.ejs')
})
router.get('/dashboard',auth,(req,res)=>{
    console.log(req.user)
    res.render('dashboard.ejs',{user:req.user})
})

module.exports = router
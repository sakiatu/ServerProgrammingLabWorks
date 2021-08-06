const ensureAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated) next()
    else {
        req.flash('error','you have no access!')
        res.redirect('/users/login')
    }
}

module.exports = ensureAuthenticated
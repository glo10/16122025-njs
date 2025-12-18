const checkLogin = (req, res, next, login) => {
    if(login && login.length > 1) {
        next()
        return
    } else {
        next(new Error('login > 1 characters'))
    }
}

const banDefunkt = (req, res, next) => {
    if(req.url.endsWith("defunkt")) {
        // res.status(403)
        // res.render('error', { message: 'defunkt is protected'})
        const errorBan = new Error('defunkt is protected')
        errorBan.status = 401
        next(errorBan)
        return
    }
    next()
}

module.exports = {
    checkLogin,
    banDefunkt
}
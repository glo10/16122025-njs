const checkLogin = (req, res, next) => {
    const login = req.params.login
    if(login && login.length > 1) {
        next()
        return
    } else {
        next(new Error('login > 1 characters'))
    }
}

const protectedDefunkt = (req, res, next) => {
    if(req.url.endsWith("defunkt")) {
        const errorBan = new Error('defunkt is protected')
        errorBan.status = 401
        next(errorBan)
        return
    }
    next()
}

module.exports = {
    checkLogin,
    protectedDefunkt
}
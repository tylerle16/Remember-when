function checkAuth(req, res, next) {
    // if there is user info in the session, continue
    if (!req.session.user) {
        res.status(401).json({
            error: 'Not logged in'
        })
        return
    } else {
        next()
    }
}

module.exports = checkAuth;
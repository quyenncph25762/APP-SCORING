class UserController {
    index(req, res, next) {
        res.render("user/login")
    }
}

module.exports = new UserController
class GroupProductControllers {
    index(req, res, next) {
        res.render("admin/groupProduct/groupProduct")
    }
}

module.exports = new GroupProductControllers
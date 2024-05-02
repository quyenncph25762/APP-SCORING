class GroupProductControllers {
    index(req, res, next) {
        res.render("admin/groupProduct/groupProduct")
    }
    deleteGroupProductToTrash(req, res, next) {
        res.render("admin/groupProduct/trash")
    }
}

module.exports = new GroupProductControllers
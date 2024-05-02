class MarkPageControllers {
    index(req, res, next) {
        res.render("markPage/markPage")
    }
    updateMark(req, res, next) {
        res.render("markPage/updateMark")
    }
    deleteMarkPageToTrash(req, res, next) {
        res.render("markPage/trash")
    }
}

module.exports = new MarkPageControllers
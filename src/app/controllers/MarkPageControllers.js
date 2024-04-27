class MarkPageControllers {
    index(req, res, next) {
        res.render("markPage/markPage")
    }
    updateMark(req, res, next) {
        res.render("markPage/updateMark")
    }
}

module.exports = new MarkPageControllers
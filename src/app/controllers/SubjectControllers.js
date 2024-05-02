class SubjectControllers {
    index(req, res, next) {
        res.render("subject/subject")
    }
    trash(req, res, next) {
        res.render("subject/trash")
    }
}

module.exports = new SubjectControllers
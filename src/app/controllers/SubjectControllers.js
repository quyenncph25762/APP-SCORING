class SubjectControllers {
    index(req, res, next) {
        res.render("subject/subject")
    }
}

module.exports = new SubjectControllers
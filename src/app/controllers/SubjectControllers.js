class SubjectControllers {
    index(req, res, next) {
        res.render("subject/subject", { params: "Chủ thể", subParams: "Quản lí chủ thể" })
    }
    trash(req, res, next) {
        res.render("subject/trash", { params: "Chủ thể", subParams: "Khôi phục chủ thể" })
    }
}

module.exports = new SubjectControllers
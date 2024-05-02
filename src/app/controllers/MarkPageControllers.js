class MarkPageControllers {
    index(req, res, next) {
        res.render("markPage/markPage", { params: "Chấm điểm OCOP", subParams: "Danh sách OCOP" })
    }
    updateMark(req, res, next) {
        res.render("markPage/updateMark", { params: "Chấm điểm OCOP", subParams: "Cập nhật OCOP" })
    }
    deleteMarkPageToTrash(req, res, next) {
        res.render("markPage/trash", { params: "Chấm điểm OCOP", subParams: "Khôi phục OCOP" })
    }
}

module.exports = new MarkPageControllers
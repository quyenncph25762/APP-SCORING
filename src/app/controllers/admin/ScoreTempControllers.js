class ScoreTempControllers {
    index(req, res, index) {
        res.render("admin/scoreTemp/scoreTemp", { params: "Phiếu chấm", subParams: "Danh sách phiếu chấm" })
    }
    add(req, res, index) {
        res.render("admin/scoreTemp/scoreTempAdd", { params: "Phiếu chấm", subParams: "Thêm phiếu chấm" })
    }
    deleteScoreTempToTrash(req, res, index) {
        res.render("admin/scoreTemp/trash", { params: "Phiếu chấm", subParams: "Khôi phục phiếu chấm" })
    }
}

module.exports = new ScoreTempControllers
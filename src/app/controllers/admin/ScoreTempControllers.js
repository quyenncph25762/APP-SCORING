class ScoreTempControllers {
    index(req, res, index) {
        res.render("admin/scoreTemp/scoreTemp")
    }
    add(req, res, index) {
        res.render("admin/scoreTemp/scoreTempAdd")
    }
    deleteScoreTempToTrash(req, res, index) {
        res.render("admin/scoreTemp/trash")
    }
}

module.exports = new ScoreTempControllers
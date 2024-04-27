class ScoreTempControllers {
    index(req, res, index) {
        res.render("admin/scoreTemp/scoreTemp")
    }
    add(req, res, index) {
        res.render("admin/scoreTemp/scoreTempAdd")
    }
}

module.exports = new ScoreTempControllers
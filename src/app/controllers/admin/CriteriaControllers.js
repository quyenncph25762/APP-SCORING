class CriteriaControllers {
    index(req, res, next) {
        console.log(1)
        res.render("admin/criteriaPage/criteriaPage", { params: "Tiêu chí", subParams: "Danh sách các tiêu chí" })
    }
    deleteCriteriaPageToTrash(req, res, next) {
        res.render("admin/criteriaPage/trash", { params: "Tiêu chí", subParams: "Khôi phục tiêu chí" })
    }
    createCriteriaPage(req, res, next) {
        console.log(req.body)
    }
}

module.exports = new CriteriaControllers
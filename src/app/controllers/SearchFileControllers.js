class SearchFileControllers {
    index(req, res, index) {
        res.render("searchFile/searchFile", { params: "Tra cứu hồ sơ OCOP", subParams: "Danh sách hồ sơ OCOP" })
    }
}

module.exports = new SearchFileControllers
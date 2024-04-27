class SearchFileControllers {
    index(req, res, index) {
        res.render("searchFile/searchFile")
    }
}

module.exports = new SearchFileControllers
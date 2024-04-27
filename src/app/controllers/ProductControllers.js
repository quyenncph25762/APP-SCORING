class ProductControllers {
    index(req, res, next) {
        res.render("product/product")
    }
    addProduct(req, res, next) {
        res.render("product/productAdd")
    }
}

module.exports = new ProductControllers
class ProductControllers {
    index(req, res, next) {
        res.render("product/product")
    }
    addProduct(req, res, next) {
        res.render("product/productAdd")
    }
    deleteProductToTrash(req, res, next) {
        res.render("product/trash")
    }
}

module.exports = new ProductControllers
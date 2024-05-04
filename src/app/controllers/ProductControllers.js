class ProductControllers {
    index(req, res, next) {

        res.render("product/product", { params: "Sản phẩm", subParams: "Quản lí sản phẩm" })
    }
    addProduct(req, res, next) {
        res.render("product/productAdd", { params: "Sản phẩm", subParams: "Thêm sản phẩm" })
    }
    deleteProductToTrash(req, res, next) {
        res.render("product/trash", { params: "Sản phẩm", subParams: "Khôi phục sản phẩm" })
    }
}

module.exports = new ProductControllers
class GroupProductControllers {
    index(req, res, next) {
        res.render("admin/groupProduct/groupProduct", { params: "Nhóm sản phẩm", subParams: "Danh sách nhóm sản phẩm" })
    }
    deleteGroupProductToTrash(req, res, next) {
        res.render("admin/groupProduct/trash", { params: "Nhóm sản phẩm", subParams: "Khôi phục nhóm sản phẩm" })
    }
    createGroupProduct(req, res, next) {
        console.log(req.body)
    }
}

module.exports = new GroupProductControllers
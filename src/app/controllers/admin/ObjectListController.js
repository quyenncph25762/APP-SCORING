class ObjectListController {
    index(req, res, next) {
        res.render("admin/objectList/objectList", { params: "Đối tượng", subParams: "Danh sách các vùng" })
    }
    trash(req, res, next) {
        res.render("admin/objectList/trash", { params: "Đối tượng", subParams: "Khôi phục vùng" })
    }
}

module.exports = new ObjectListController
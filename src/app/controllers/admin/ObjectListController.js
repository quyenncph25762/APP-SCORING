const Customer = require("../../models/Customer")
class ObjectListController {
    // fetchAll
    index(req, res, next) {
        Customer.fetchAllCustomer((err, Customer) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!Customer) {
                return res.status(400).json({
                    message: "Lỗi"
                })
            }
            res.render("admin/objectList/objectList", { params: "Đối tượng", subParams: "Khôi phục vùng", Customer: Customer })
        })
    }
    // getOne(req, res, next) {
    //     const id = req.params.id
    //     Customer.getOneCustomer(id, (err, data) => {
    //         if (err) {
    //             return res.status(400).json({
    //                 message: `${err}: Loi getOne`
    //             })
    //         }
    //         if (!data) {
    //             return res.status(400).json({
    //                 message: "Không có đối tượng nào"
    //             })
    //         }
    //         return res.status(200).json(data[0])
    //     })
    // }
    // hien thi trong thung rac
    getAllCustomerFromTrash(req, res, next) {
        Customer.fetchAllCustomerFromTrash((err, Customer) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!Customer) {
                return res.status(400).json({
                    message: "Lỗi"
                })
            }
            res.render("admin/objectList/trash", { params: "Đối tượng", subParams: "Khôi phục vùng", Customer: Customer })
        })
    }
    // them
    create(req, res, next) {
        Customer.AddCustomer({
            code: req.body.code,
            customerName: req.body.customerName,
            status: req.body.status ? 1 : 0,
            note: req.body.note
        }, (err, data) => {
            if (err) {
                console.error('Lỗi thêm sản phẩm:', err);
                res.status(500).send('Internal Server Error');
            } else {
                console.log('Sản phẩm đã được thêm thành công:');
                res.redirect('back')
            }
        })
    }
    // xoa vao thung rac
    removeToTrash(req, res, next) {
        const id = req.params.id
        Customer.deleteCustomerToTrash(id, (err, result) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            } else {
                return res.status(203).json({
                    message: "Xoa thanh cong"
                })
            }
        })
    }
    // xoa
    remove(req, res, next) {
        const id = req.params.id
        Customer.deleteCustomer(id, (err, result) => {
            if (err) {
                return res.status(404).send(err);
            } else {
                res.redirect('back')
            }
        })
    }
    // khoi phuc
    revert(req, res, next) {
        const id = req.params.id
        Customer.revertCustomer(id, (err, data) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            } else {
                return res.status(200).json({
                    message: "Khôi phục thành công"
                })
            }
        })
    }
    trash(req, res, next) {
        res.render("admin/objectList/trash", { params: "Đối tượng", subParams: "Khôi phục vùng" })
    }
    // update
    update(req, res, next) {
        console.log(req.body)
        const id = req.params.id
        Customer.updateCustomer(id, ({
            code: req.body.code,
            customerName: req.body.customerName,
            note: req.body.note,
            status: req.body.status === 'on' ? 1 : 0
        }), (err, result) => {
            if (err) {
                return res.status(400).json({
                    message: `${err}: Loi updateCustomer`
                })
            }
            return res.status(200).json(res.redirect("back"))
        })

    }
}

module.exports = new ObjectListController
const CriteriaModel = require("../../models/Criteria")
class CriteriaController {
    // fetchAll
    index(req, res, next) {
        CriteriaModel.fetchAllCriteria((err, Criteria) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!Criteria) {
                return res.status(400).json({
                    message: "Lỗi"
                })
            }
            res.render("admin/criteriaPage/criteriaPage", { params: "Tiêu chí", subParams: "danh sách tiêu chí", Criteria: Criteria })
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
    getAllCriteriaFromTrash(req, res, next) {
        CriteriaModel.fetchAllCriteriaFromTrash((err, Criteria) => {
            if (err) {
                return res.status(400).json({
                    message: err
                })
            }
            if (!Criteria) {
                return res.status(400).json({
                    message: "Lỗi"
                })
            }
            res.render("admin/criteriaPage/trash", { params: "Tiêu chí", subParams: "Khôi phục tiêu chí", Criteria: Criteria })
        })
    }
    // them
    create(req, res, next) {
        CriteriaModel.AddCriteria({
            code: req.body.code,
            criteriaName: req.body.criteriaName,
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
        console.log(id)
        CriteriaModel.deleteCriteriaToTrash(id, (err, result) => {
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
        CriteriaModel.deleteCriteria(id, (err, result) => {
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
        CriteriaModel.revertCriteria(id, (err, data) => {
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
    // update
    update(req, res, next) {
        console.log(req.body)
        const id = req.params.id
        CriteriaModel.updateCriteria(id, ({
            code: req.body.code,
            criteriaName: req.body.criteriaName,
            note: req.body.note,
            status: req.body.status === 'on' ? 1 : 0
        }), (err, result) => {
            if (err) {
                return res.status(400).json({
                    message: `${err}: Loi updateCriteria`
                })
            }
            return res.status(200).json(res.redirect("back"))
        })

    }
}

module.exports = new CriteriaController
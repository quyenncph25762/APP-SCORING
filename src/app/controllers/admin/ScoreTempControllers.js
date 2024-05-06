const ScoreTempModel = require("../../models/ScoreTemp")
const CustomerModel = require("../../models/Customer")
const CriteriaModel = require("../../models/Criteria")
const ScoreTempDetail = require("../../models/ScoreTempDetail")
class ScoreTempControllers {
    index(req, res, index) {
        ScoreTempModel.fetchAllScoreTemp((err, ScoreTemp) => {
            if (err) {
                return res.status(400).json({
                    message: `${err} , loi fetchAllScoreTemp`
                })
            }
            if (!ScoreTemp) {
                return res.status(403).json({
                    message: `Khong co phieu cham nao`
                })
            }
            res.render("admin/scoreTemp/scoreTemp", { params: "Phiếu chấm", subParams: "Danh sách phiếu chấm", ScoreTemp: ScoreTemp })
        })
    }
    add(req, res, index) {
        ScoreTempDetail.fetchAllScoreTempDetail((err, ScoreDetail) => {
            if (err) {
                return res.status(400).json({
                    message: `${err} loi fetchAllScoreTempDetail from AddScoreTemp`
                })
            } else {
                console.log(ScoreDetail)
            }
        })
        CustomerModel.fetchAllCustomer((err, Customer) => {
            if (err) {
                return res.status(400).json({
                    message: `${err} loi fetchAllCustomer from AddScoreTemp`
                })
            }
            CriteriaModel.fetchAllCriteria((err, Criteria) => {
                if (err) {
                    return res.status(400).json({
                        message: `${err} loi fetchAllCriteria from AddScoreTemp`
                    })
                }
                res.render("admin/scoreTemp/scoreTempAdd", { params: "Phiếu chấm", subParams: "Thêm phiếu chấm", Customer: Customer, Criteria: Criteria })
            })
        })

    }
    addScoreTemp(req, res, index) {
        const { code, title, staus, customerId, note, titleDetail, isMark, maxPoint, criteriaId, noteDetail } = req.body
        const scoreTemp = { code, title, staus, customerId, note }
        const scoreTempDetail = { titleDetail, isMark, maxPoint, criteriaId, noteDetail }
        console.log(scoreTempDetail)

    }
    deleteScoreTempToTrash(req, res, index) {
        res.render("admin/scoreTemp/trash", { params: "Phiếu chấm", subParams: "Khôi phục phiếu chấm" })
    }
}

module.exports = new ScoreTempControllers
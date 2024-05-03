class MarkPageReviewControllers {
    index(req, res, next) {
        res.render("markPageReview/markPageReview", { params: "Chấm điểm OCOP", subParams: "Chi tiết" })
    }
}

module.exports = new MarkPageReviewControllers
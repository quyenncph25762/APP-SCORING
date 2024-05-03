const express = require("express")
const MarkPageReviewControllers = require("../app/controllers/MarkPageReviewControllers")
const router = express.Router()
router.get("/", MarkPageReviewControllers.index)
module.exports = router

const express = require("express")
const MarkPageControllers = require("../app/controllers/MarkPageControllers")
const router = express.Router()

router.get("/", MarkPageControllers.index)
router.get("/update/:id", MarkPageControllers.updateMark)
module.exports = router

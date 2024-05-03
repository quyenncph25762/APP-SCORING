const express = require("express")
const router = express.Router()
const MarkPageControllers = require("../app/controllers/MarkPageControllers")

router.get("/", MarkPageControllers.index)
// update
router.get("/update/:id", MarkPageControllers.updateMark)
// trash
router.get("/trash", MarkPageControllers.deleteMarkPageToTrash)

module.exports = router

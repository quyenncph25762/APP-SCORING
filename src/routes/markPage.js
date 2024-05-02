const express = require("express")
const MarkPageControllers = require("../app/controllers/MarkPageControllers")
const router = express.Router()

router.get("/", MarkPageControllers.index)
// update
router.get("/update/:id", MarkPageControllers.updateMark)
// trash
router.get("/trash", MarkPageControllers.deleteMarkPageToTrash)

module.exports = router

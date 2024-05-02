const express = require("express")
const ScoreTempControllers = require("../app/controllers/admin/ScoreTempControllers")
const router = express.Router()

router.get("/", ScoreTempControllers.index)
// add
router.get("/add", ScoreTempControllers.add)
// xoa mem
router.get("/trash", ScoreTempControllers.deleteScoreTempToTrash)

module.exports = router

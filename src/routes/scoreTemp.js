const express = require("express")
const router = express.Router()
const ScoreTempControllers = require("../app/controllers/admin/ScoreTempControllers")

router.get("/", ScoreTempControllers.index)
// addPage
router.get("/add", ScoreTempControllers.add)
// add
router.post("/addScoreTemp", ScoreTempControllers.addScoreTemp)
// xoa mem
router.get("/trash", ScoreTempControllers.deleteScoreTempToTrash)


module.exports = router

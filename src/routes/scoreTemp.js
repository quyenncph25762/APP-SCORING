const express = require("express")
const ScoreTempControllers = require("../app/controllers/admin/ScoreTempControllers")
const router = express.Router()

router.get("/", ScoreTempControllers.index)
router.get("/add", ScoreTempControllers.add)
module.exports = router

const express = require("express")
const SubjectControllers = require("../app/controllers/SubjectControllers")
const router = express.Router()

router.get("/", SubjectControllers.index)
router.post("/add", SubjectControllers.index)
router.get("/trash", SubjectControllers.trash)
module.exports = router
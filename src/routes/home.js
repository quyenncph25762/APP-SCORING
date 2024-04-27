const express = require("express")
const router = express.Router()
const SubjectControllers = require("../app/controllers/SubjectControllers")


router.get("/", SubjectControllers.index)
module.exports = router
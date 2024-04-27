const express = require("express")
const GroupProductControllers = require("../app/controllers/admin/GroupProductControllers")
const router = express.Router()

router.get("/", GroupProductControllers.index)

module.exports = router

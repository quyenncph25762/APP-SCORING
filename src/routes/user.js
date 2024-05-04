const express = require("express")
const UserControllers = require("../app/controllers/UserControllers")
const router = express.Router()
router.get("/login", UserControllers.index)

module.exports = router
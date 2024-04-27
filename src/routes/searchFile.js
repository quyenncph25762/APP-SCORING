const express = require("express")
const SearchFileControllers = require("../app/controllers/SearchFileControllers")
const router = express.Router()

router.get("/", SearchFileControllers.index)

module.exports = router
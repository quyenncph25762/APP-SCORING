const express = require("express")
const router = express.Router()
const SearchFileControllers = require("../app/controllers/SearchFileControllers")

router.get("/", SearchFileControllers.index)
module.exports = router
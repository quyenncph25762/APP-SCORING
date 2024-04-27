const express = require("express")
const router = express.Router()
const ProductControllers = require("../app/controllers/ProductControllers")

router.get("/", ProductControllers.index)
// them san pham
router.get("/add", ProductControllers.addProduct)

module.exports = router
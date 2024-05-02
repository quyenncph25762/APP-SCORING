const express = require("express")
const router = express.Router()
const ProductControllers = require("../app/controllers/ProductControllers")

router.get("/", ProductControllers.index)
// them san pham
router.get("/add", ProductControllers.addProduct)
// xoa mem
router.get("/trash", ProductControllers.deleteProductToTrash)

module.exports = router
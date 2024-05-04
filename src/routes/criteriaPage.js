const express = require("express")
const CriteriaControllers = require("../app/controllers/admin/CriteriaControllers")
const router = express.Router()

router.get("/", CriteriaControllers.index)
// xoa mem
router.get("/trash", CriteriaControllers.deleteCriteriaPageToTrash)
// add
router.post("/create", CriteriaControllers.createCriteriaPage)

module.exports = router

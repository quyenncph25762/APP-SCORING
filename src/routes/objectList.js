const express = require("express")
const ObjectListController = require("../app/controllers/admin/ObjectListController")
const router = express.Router()

router.get("/", ObjectListController.index)
router.get("/trash", ObjectListController.trash)
module.exports = router
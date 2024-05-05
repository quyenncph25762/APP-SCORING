const express = require("express")
const ObjectListController = require("../app/controllers/admin/ObjectListController")
const router = express.Router()

router.get("/", ObjectListController.index)
// router.get("/:id", ObjectListController.getOne)      
router.post("/add", ObjectListController.create)
// getAll thung rac
router.get("/trash", ObjectListController.getAllCustomerFromTrash)
// xoa vao thung rac
router.delete("/removeToTrash/:id", ObjectListController.removeToTrash)
// xoa vinh vien
router.delete("/remove/:id", ObjectListController.remove)
// Phuc hoi
router.patch("/revert/:id", ObjectListController.revert)
// update
router.post("/update/:id", ObjectListController.update)
module.exports = router
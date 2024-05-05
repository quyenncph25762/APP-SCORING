const express = require("express")
const CriteriaControllers = require("../app/controllers/admin/CriteriaControllers")
const router = express.Router()

router.get("/", CriteriaControllers.index)
router.post("/add", CriteriaControllers.create)
// fetchAll trash
router.get("/trash", CriteriaControllers.getAllCriteriaFromTrash)
// remove to trash
router.delete("/removeToTrash/:id", CriteriaControllers.removeToTrash)
// delete
router.delete("/remove/:id", CriteriaControllers.remove)
// revert
router.patch("/revert/:id", CriteriaControllers.revert)
// update
router.post("/update/:id", CriteriaControllers.update)


module.exports = router

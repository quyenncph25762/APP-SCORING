const routerHome = require("./home")
const routerSubject = require("./subject")
const routerProduct = require("./product")
const routerSearchFile = require("./searchFile")
const routerMarkPage = require("./markPage")
const routerScoreTemp = require("./scoreTemp")
const routerUser = require("./user")
const routerCriteriaPage = require("./criteriaPage")
const routerObjectList = require("./objectList")
const routerMarkPageReview = require("./markPageReview")
const routerScoreTempDetail = require("./scoreTempDetail")
function route(app) {
    app.use("/", routerHome)
    app.use("/admin/subject", routerSubject)
    app.use("/product", routerProduct)
    app.use("/searchFile", routerSearchFile)
    app.use("/markPage", routerMarkPage)
    app.use("/markPageReview", routerMarkPageReview)
    app.use("/user", routerUser)

    // cham dien
    app.use("/admin/scoreTemp", routerScoreTemp)
    // bien the cham diem
    app.use("/admin/scoreTemp", routerScoreTempDetail)
    // tieu chi
    app.use("/admin/criteria", routerCriteriaPage)
    // doi tuong
    app.use("/admin/objectList", routerObjectList)
}

module.exports = route
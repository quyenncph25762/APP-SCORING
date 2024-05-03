const routerHome = require("./home")
const routerSubject = require("./subject")
const routerProduct = require("./product")
const routerSearchFile = require("./searchFile")
const routerMarkPage = require("./markPage")
const routerScoreTemp = require("./scoreTemp")
const routerUser = require("./user")
const routerCriteriaPage = require("./criteriaPage")
function route(app) {
    app.use("/", routerHome)
    app.use("/subject", routerSubject)
    app.use("/product", routerProduct)
    app.use("/searchFile", routerSearchFile)
    app.use("/markPage", routerMarkPage)
    app.use("/admin/criteria", routerCriteriaPage)
    app.use("/scoreTemp", routerScoreTemp)
    app.use("/user", routerUser)
}

module.exports = route
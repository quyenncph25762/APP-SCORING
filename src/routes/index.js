const routerHome = require("./home")
const routerSubject = require("./subject")
const routerProduct = require("./product")
const routerSearchFile = require("./searchFile")
const routerMarkPage = require("./markPage")
const routerGroupProduct = require("./groupProduct")
const routerScoreTemp = require("./scoreTemp")
function route(app) {
    app.use("/", routerHome)
    app.use("/subject", routerSubject)
    app.use("/product", routerProduct)
    app.use("/searchFile", routerSearchFile)
    app.use("/markPage", routerMarkPage)
    app.use("/groupProduct", routerGroupProduct)
    app.use("/scoreTemp", routerScoreTemp)
}

module.exports = route
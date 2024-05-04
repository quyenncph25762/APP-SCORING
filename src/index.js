const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")
const bodyParser = require("body-parser")
const route = require("./routes")
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))
app.engine("hbs", handlebars.engine({
    extname: ".hbs"
}))


app.set("view engine", 'hbs')

app.set('views', path.join(__dirname, "resources\\views"))
route(app)

app.listen(3000, console.log(`http://localhost:3000`))
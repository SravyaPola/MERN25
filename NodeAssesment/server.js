let express = require('express')
const app = express() 

const defaultRoute = require("./route/defaultRoute")
const deafultApp = express();

globalThis.rootPath = __dirname
app.use("/", deafultApp)  
deafultApp.use("/",defaultRoute)
console.log("Rest API is listening at 9000")
app.listen(9000)
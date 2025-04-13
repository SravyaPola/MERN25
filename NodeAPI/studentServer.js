let express = require('express');
const app = express();

const defaultRoute = require("./route/studentDefaultRoute")
const deafultApp = express();

globalThis.rootPath = __dirname

app.use('/static', express.static('public'))

app.use("/", deafultApp) 
deafultApp.use("/",defaultRoute) 

console.log("Rest API is listening at 9000")
app.listen(9000)
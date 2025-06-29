let express = require('express')
const app = express() //when we invoke it creates an express application which helps to build a web server

const defaultRoute = require("./route/defaultRoute")
const deafultApp = express();

const userRoute = require("./route/userRoute")
const userApp = express();

const productRoute = require("./route/productRoute")
const productApp = express();

const studentRoute = require("./route/studentRoute")
const studentApp = express();

const cartRoute = require("./route/cartRoute");   
const cartApp   = express();

const reviewRoute = require("./route/reviewRoute");
const reviewApp   = express();
 

const recentOrderRoute = require("./route/recentOrderRoute");
const recentOrderApp = express();
//calling the cors instance 
const cors = require("cors");

globalThis.rootPath = __dirname
 
//allowing the cross origin resource sharing
app.use(cors())//using cors middleware to allow resource sharing with different ports in localhost

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert_info.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 


app.use("/user", userApp) 
userApp.use("/",userRoute)

app.use("/product", productApp) 
productApp.use("/",productRoute)

app.use("/student", studentApp) 
studentApp.use("/",studentRoute)

app.use("/cart", cartApp);      
cartApp.use("/", cartRoute);

app.use("/recentorders", recentOrderApp);
recentOrderApp.use("/", recentOrderRoute);

app.use("/reviews", reviewApp);
reviewApp.use("/", reviewRoute);



app.use("/", deafultApp) //=>  app.use("/student", studentApp) 
deafultApp.use("/",defaultRoute) //redirecting all requests to default route to get served


console.log("Rest API is listening at 9000")
app.listen(9000)
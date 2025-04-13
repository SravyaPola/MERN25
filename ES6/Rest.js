//REST - Representational State Transfer - Consventions (Guidelines) Protocol

//HTTP/HTTPS - HyperText Transfer Protocol

//HTTP/s - is statless protocol so to save the information retrived/manipulated by this protocol we need to explicitely save
// this information to DB via Services, if it follow REST convention we say it restful

//Methods/Verbs used
//Get - to fetch
//Post - to create
//Update/Put - to udpate
//Patch - to update minimum info
//Delete - to delete info via id


//HTML - HyperText Markup Language , node structure like XML


// Backenend sever to build REST API's

// node - http, request, response, content-type, (can be used to build restful API's)

// express is fast unoppinionated lightwt web server - 

// we need to create a setup of commandline interface so that we can fetch modules, install them locally and use them over node framework

// yarn or npm - CLI (command line interfaces) can be used to build the application

// initialize the application (NodeAPI) with package.json

// package.json is like a project information file which contains basic information of project
// as name, version, entry file
// test instructions, 
// dependencies etc

// npm init (enter - will initialize the package file)

// once package.json is created we can install modules or other packages by using 
// npm i <module name> <installation>
// npm u <module name> <un-installation>



// once installation of packages is done we don't share node_modules to repo but adding this to .gitignore and 
// to install the already added packages in package.js we directly run below command
// npm install     <this will install all the dependencies mentioned in package json>

// 4 eseential things we get : methods, application, request, response, router
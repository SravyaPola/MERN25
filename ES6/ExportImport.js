//each file is a module, a file can read data from another file and a cobination of multiple files to create a feature is also termed as a - module
//in ES6 we are allowed to export and import single or multiple properties, functions, classes from/to a file

//we don't need to put extension of js files while importing in another file (module), but path has to be absolute

// we have two types of export and import present - default and another is named

// for example a file with name constant.js 
export default constant = 9.8; // the deault here denote default export, one module can have only one default and conventionally its with name of file
export let pie = 3.141; // named export
export function printInfo(params) {  //named export
    console.log(params)
} 

//to import constant in calculation.js
import constant from "constant.js" //so default variable will print - 9.8

//importing named exports, can be imported many togather within curly brackets { --,--,--}
import {pie, printInfo} from "constant";

//named and default can be exported togather
//user.js
import constant, {pie, printInfo} from "constant";


//when we have duplicate import names - constant2.js
//export let pie = 3.101; 

//alias can be used to resolve the name confict
//we need to import from both in user.js -
import constant, {pie, printInfo} from "constant.js";
//import pie as pie2 from "constant2.js"; // pie2 will be used in user.js file

//we can import all constants using astriks operator
import *  as allConstants from "constant.js";

console.log(allConstants.pie)
console.log(allConstants.printInfo("Mike"))


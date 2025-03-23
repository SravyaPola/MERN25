//data types are used to distinctly identify the category/size/allocation of data assigned

//six distinct types present in javascript
//number, string, boolean, undefined, object
//null as value 

var autoCast = 1000
console.log("the value we have is - ", autoCast)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(autoCast)) //type is - number

autoCast = 10.009
console.log("the value we have is - ", autoCast)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(autoCast)) //type is - number


autoCast = "Tejasvi"

console.log("the value we have is - ", autoCast)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(autoCast)) //type is - string

autoCast = true
console.log("the value we have is - ", autoCast)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(autoCast)) //type is - boolean


autoCast = undefined // undefined - is a valid type as well as a default value to any literal
console.log("the value we have is - ", autoCast)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(autoCast)) //type is - undefined

autoCast = { name : "JeremiahDy" } //json, object
console.log("the value we have is - ", autoCast)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(autoCast)) //type is - object



autoCast = null // null - is also a valid data but its data type is object
console.log("the value we have is - ", autoCast)
//typeof - is used to check the datatype
console.log("the type we have is - ", typeof(autoCast)) //type is - object


//symbol
// another type of data type is introduced in ES6

var mySymbol = Symbol("MyNewDataType")

console.log(mySymbol)
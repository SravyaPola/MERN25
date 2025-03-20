// Map - is the data structure which stores values in key : value format and allows a set of methods and properties to fetch
// store, update and delete the value present in Map
// There are mainly two types of Maps created
// Strong Map - when our keys are of string type or alphanumeric type
// Weak Map - this allows us to create keys such as numbers, functions, objects etc

//[{key : value}]

let myMap = new Map();

//creating multiple types of keys, to build a weak

let myString = "key is string", objectKey = {}, functionKey = function () {}, numberKey = 2025;

myMap.set(myString, "string key present")
myMap.set(objectKey, "object key present")
myMap.set(functionKey, "function key present")
myMap.set(numberKey, "number key present")

// console.log(myMap.entries())
// console.log(myMap.size)

// console.log(myMap.get(2025)) //"number key present"

// //console.log(myMap.get({})) // undefined

// console.log(myMap.delete(functionKey))

// console.log(myMap.size)

// myMap.clear()

// console.log(myMap.size)


//Set - is a data structure used similar to array but can hold unique values only

//let nameList = [] //for every insert we need to validate if the name is already present or not

let teamName = new Set()
//["Eric", "Alec", "Dat", "Tejasvi", "Mike"]

teamName.add("Eric")
teamName.add("Alec")
teamName.add("Dat")

// console.log(teamName.entries())
// console.log(teamName.size)

// console.log(teamName.add("Eric"))

console.log(teamName.entries())
// console.log(teamName.size)

// console.log(teamName.add("Eric Phegly"))


// console.log(teamName.entries())
console.log(teamName.size)

console.log(teamName.keys())
console.log(teamName.values())
console.log(teamName.has("Dat"))
console.log(teamName.has("Random"))


// Create two examples of your own choice to make a map and a weak map
// and a list of unique names of 10 states of your favrourite country you wish to visit on world tour
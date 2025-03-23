// Map - is the data structure which stores values in key : value format and allows a set of methods and properties to fetch
// store, update and delete the value present in Map
// There are mainly two types of Maps created
// Strong Map - when our keys are of string type or alphanumeric type ---- key and the value can be of any type
// Weak Map - this allows us to create keys such as numbers, functions, objects etc ---- every key can only be an object and function

//[{key : value}]

let myMap = new Map();

//creating multiple types of keys, to build a weak

let myString = "key is string", objectKey = {}, functionKey = function () {}, numberKey = 2025;

myMap.set(myString, "string key present")
myMap.set(objectKey, "object key present")
myMap.set(functionKey, "function key present")
myMap.set(numberKey, "number key present")

// //console.log(myMap.entries())
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

// SOLUTIONS TO ABOVE PROBLEM

// Map Example and Weak Map Example

let strongMap = new Map();
let weakMap = new WeakMap();

let fruits = []

strongMap.set("a" , "b")
strongMap.set(fruits, ["apple", "banana"])

console.log(strongMap)

// weakMap.set("a" , "b") -- TypeError: Invalid value used as weak map key --- only objects and functions are used as key not primitive data type
weakMap.set(fruits, ["apple", "banana"])


// Unique set of 10 states

let countries = new Set()

countries.add("A")
countries.add("B")
countries.add("C")
countries.add("D")
countries.add("E")
countries.add("F")
countries.add("G")
countries.add("H")
countries.add("I")
countries.add("A") // will not be added to list -- because its not unique --- but wont throw error

console.log(countries)
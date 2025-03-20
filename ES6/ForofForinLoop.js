//for ->  array[1].key
//foreach -> (this)
//1. loops through length
//2. to access the value we pass key as index for current object array[1].key , (this)

//the collections or Iterables are array of JSON or JSON of JSON
// let ProductList = [{Prod1},{Prod2}]
// for (let index = 0; index < ProductList.length; index++) {
//     const element = ProductList[index];
//     element["productname"]
// }

//a. for in loop - iterates over the property value, basically meant for json objects with - key values

//for in loop  
let person = {fname:"John", lname:"Doe", age:25, address : {}, sesion: "MERNStack"}; 

// for (const key in person) {

//     //if (Object.prototype.hasOwnProperty.call(person, key)) {
//         const element = person[key];
//         console.log(element)
//     //}
// }

//console.log("Other Example with array") 


let arr = [3,5,7]; //{0:3, 1:5, 2:7, 3:"Joel"}

arr.push("Joel")
//arr[3] = "Tejasvi"

arr["name"] = "Eric"

for (const key in arr) {
        const element = arr[key];
        console.log({key})
        console.log({element})
}


//b. for of - loop works for the array's in javascript and retrieves the value without indexing
// 
let numbers = [9,10,11]

//numbers[3] = "Em Long"
//numbers.push("Mike")

numbers["name"] = "Eric"

console.log(numbers)

for (const element of numbers) {
    console.log(element) //data can be accessed without indexes
}

console.log("For Of Loop") 

let cars = ['BMW', 'Volvo', 'Mini']; 

//cars[5] = "Toyota"

//cars.newKey = "Range Rover"

cars.push("Range Rover")

//explict key can not be identified via for of loop, for this array indexes are the keys

for (const element of cars) {
    console.log(element)
}


//Create an example of your own for -
// 1. ForOF Loop
// 2. ForIn loop
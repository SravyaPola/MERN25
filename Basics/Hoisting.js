//JS is interpreted and partially compiled language 

//Hoisting - is the process of partially compiling and pulling all the variables and functions on top and having an information
// about them, even if they are present in the last line of JS file

//Two types of hoisting are present
//1. Variable Hoisting- a variable is hoisted with a default value (undefined)

//2. Functional Hoisting - it is hoisted with its completed definion

var myFancyVariable = undefined

console.log(myFancyVariable) //not an error but undefined

console.log(Add)// not   defeined
//console.log(Add(4,4)) //undefined() //Add is not a function

console.log(Sum) // hoisted with its definition
console.log(Sum(4,4)) // can be executed even before the declaration of the function

console.log("I am a programmer!!")
//alert("I am a programmer!!")


var Add = function(p1, p2) {
    return p1+p2
}

var myFancyVariable = "This is just basic not fancy!"

console.log(myFancyVariable) //

function Sum(p1, p2) {
    return p1+p2
}

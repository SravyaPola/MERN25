//October - MERNStack Session - Assessment Number 1 - 14th March 2025

// SOLUTION TO ASSESSMENT - 1 

//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

// Answer 

// Dynamic Typing -- Any datatype can be assigned to any variable i.e flexible in variable assignment
// Auto Casting - Allows to reassign and change the data type at the moment of re-assignment
// closure : Allows function returning another function with the properties that we need to expose, so that data is properly encapsulated
// Event Handling: It allows for interaction with users through events like clicks,form submissions.
// DOM Manipulation: JavaScript can modify the structure, style, and content of a webpage's HTML elements.


//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
var autoCast = "Robert "
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = .0266
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = false
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = {myname : "Test Me"}
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = 25166665
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = undefined
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = true
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = "Robert Jr."
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = null
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = {}
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))
autoCast = -32767
console.log("the value", autoCast)
console.log("the type", typeof(autoCast))

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function showUserInfo(firstname, lastname, age){
    console.log(firstname)
    console.log(lastname)
    console.log(age)
}
showUserInfo("Sravya","Pola",24)

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

function doaddition(n1, n2, n3){
    return n1+n2+n3
}
console.log(doaddition(2,3,4))
console.log(doaddition(2))
console.log(doaddition(2.3,3))
console.log(doaddition("first", 2, "three"))
//over-writing concept where the last function definition replaces all in top and gets hoisted as well

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function
//Answers
//a
function Closure(){
    var name = "Sravya";
    var phoneNumber = "12345"

    var getPhoneNumber = function(admin){
        if(admin == name){
            return phoneNumber;
        }else{
            return "You are not admin"
        }
    };
    return getPhoneNumber;
}
var phno = Closure();
console.log(phno("roopa"))

//b
//Using var
//Variables declared with var are hoisted to the top but not initialized. They get a default value of undefined.
console.log(a); // undefined (Hoisted but not initialized)
var a = 10;
console.log(a); // 10
//Using let and const
//let and const are hoisted, but they are not initialized. They exist in the Temporal Dead Zone (TDZ) until the declaration is encountered.
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
//Using function declarations
//Function declarations (function) are hoisted entirely (both declaration and definition).
sayHello(); // Works! Output: "Hello"
function sayHello() {
    console.log("Hello");
}
//Using function expressions
//Function expressions (const func = function() {}) are only partially hoisted.
greet(); //TypeError: greet is not a function
const greet = function() {
    console.log("Hi");
};

//c
function Calculator(a, b) {
    this.a = a, 
    this.b = b,
    this.Add = function () { 
        return this.a + this.b
    }
    this.Sub = function () {
        return this.a - this.b
    }
    this.Mul = function () {
        return this.a * this.b
    }
    this.Div = function () {
        return this.a / this.b
    }
}
var calculate = new Calculator(30,15) 
console.log(calculate.Add()) 
console.log(calculate.Sub()) 
console.log(calculate.Mul())
console.log(calculate.Div()) 

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
//Answer
// call invokes a function with a specified this value and arguments passed individually.
// apply is similar to call, but it takes arguments as an array.
// bind returns a new function with this permanently set to the specified object.
// Unlike call and apply, bind does not immediately invoke the function.
// Diffrences between bind and apply is -- Bind -- Permanently binds this , Apply -- Temporarily sets this


//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

const Student1 = {
    name: "Sravya",
    age: 24,
    getDetails: function() {
        setTimeout(function() {
            console.log(`Student: ${this.name}, Age: ${this.age}`);
        }.bind(this), 2000);
    }
};
Student1.getDetails(); 

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
//Answer
// does not inherit from Object.prototype, so it does not have built-in methods like .toString(), .hasOwnProperty(),
const obj = Object.create(null);
obj.name = "Alice";
obj.age = 25;
console.log(obj); 
// Uses
// Avoiding Inherited Properties
// Creating a Pure Key-Value Store (Dictionary-like Object)
// Security & Performance Benefits

//Q9. How do we merge different objects properties using Object class function

var fruits = {name : "apple", count : 3, colour : "red"}
var vegetables = {name : "Cabbage", price: 50, structure : "layered"}
var dryfruits = {name : "almonds", howtoeat: "soak"}

var groceries = {};
groceries = Object.assign({}, fruits, vegetables, dryfruits) //the last source will replace common values
console.log(groceries)


//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returne



// A function is a block of code which gives behaviour we excpect to do some job.
// e.g. < Area -> square(param), rectangle(length, width), circle(radius), X-> Sphere() >
// In JS functions are not necessarily needs to be directly associated with class object, it can work independently
// Functions are pure functions, a pure function will always return something, if a user doesn't retun anything from 
// the function JS runtime will attach a default (undefined) value to it <can be demonstrated on the browser console>

//keyword function - function name - (parameters)
function name(params) {
    //definition of the function 
    //scope of the function
    //return "Dat"
}
//Square.call(Area, )
//console.log(name()); //function invocation

//1. named function - has a name to be used
function Add(val1, val2) {
    console.log(val1 + val2)
    //return val1 + val2
}
Add(5,10) //15

//2. Function expression - when a definition of a function is assigned to a variable
// or an unamed or anonymous funtion assigned to a variable

var Sum = function (val1, val2) {
    console.log(val1 + val2)
    //return val1 + val2
}
Sum(10,10);
// Sum(10,11)
// Sum(10,12)
// Sum(10,13)

//3. IIFE - Immediately Invocable Function Expression - is created to execute for one and only time

(function SumIIFE(val1, val2) {
    console.log(val1 + val2)
    //return val1 + val2
})(20,25)

//SumIIFE(25,25) - not allowed to execute second time


//4. Constructor function

function Area(length, breadth) {
    this.length = length, //properties of the class
    this.breadth = breadth,

    this.Square = function () { //similar to method of the class
        return this.length * this.length
    }

    this.Rectangle = function () {
        return this.length * this.breadth
    }

    this.Circle = function (radius) {
        return 3.141*radius*radius
    }
}

var areaObj = new Area(10,20) //instantiation of a class

console.log(areaObj.Square()) //100
console.log(areaObj.Rectangle()) //200
console.log(areaObj.Circle(5)) // 78.525

//addition of properties - with the help of prototype
areaObj.__proto__.message = "Area calculated as - "; 

//overriding of initial function definition
areaObj.Square = function (anyLength) { //similar to method of the class
    return this.message +(anyLength * anyLength)
}

console.log(areaObj.Square(5)) //25



//5. nested function - these are set of functions executed one after another with a dependency
// javascript currying - we keep returning and executing functions and get the output towards the end

var initialVal = 10
function A(a) {
    console.log(initialVal)
    //console.log(d) //can't be accessed in parent - scope accessibility becomes zero when we move up to the parent function

    return function B(b) {
        console.log(a)
        return function C(c) {
            console.log(b)
            return function D(d) {
                console.log(c)
                //
                return a+b+c+d+initialVal //ultimate outcome of nested functions
            }
        }
    }   
}

var objA = A(5)
var objB = objA(6)
var objC = objB(7)
var objD = objC(8)

console.log(objD) //36 the sum of all parameters passed + initial value


//chain execution is also done for nested functions as below

var calculatedVal = A(5)(6)(7)(8) //A(5) => B, A(5)(6) => C ...
console.log(calculatedVal)
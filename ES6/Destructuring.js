// To assign values and keep it stored on a page we keep creating variables/identifiers in our page
// this keeps on growing is scattered

// to limit the creation of such variables we have been given destructuring feature in ES6

// let User = getUserInfo("/api/path").fetch() // returns the entire fields of user object

// let FirstName = User.FirstName
// let LastName = User.LastName
// let Address = User.Address

//1. Array Destructuring - to copy data from an array into another array object directly without creating new identifiers

//a. Variable assignments

//let One = Numbers[0]

// let [One, Two, Three, Four] = [1,2,3] //Numbers Array

// console.log(One)
// console.log(Two)
// console.log(Three)
// console.log(Four) // if no value is there for a variable default value is assigned - undefined


//b. Default value assignments

//let One = Numbers[0]

// let [One, Two, Three, Four = 4] = [1,2,3] //Numbers Array

// console.log(One)
// console.log(Two)
// console.log(Three)
// console.log(Four) // if no value is there for a variable default value is assigned - undefined


//c. Rest of the array assignments (rest param)

//let One = Numbers[0]

let [One, Two, Three, Four, ...restNumbers] = [1,2,3,4,5,6,7] //Numbers Array

console.log(One)
console.log(Two)
console.log(Three)
console.log(Four) 

console.log(restNumbers) //One, Two, Three, Four values are copied and rest of the array is copied in restNumbers

//d.  Swapping of variables

let a = "A", b = "B";

//swapping

[a,b] = [b,a]

console.log(a)
console.log(b)


//2. Object Destructuring

//a. Single object destructuring

let Assessment = {
    Name : "Jugue",
    Standard : "Professional",
    Marks : {
        Java : 10,
        Mernstack : 8,
        ES6 : 9
    }
};

// let ShowUserName =  Assessment.Name
// let ShowUserJavaMark =  Assessment.Marks.Java
// let ShowUserES6Mark =  Assessment.Marks.ES6

let {Name, Standard} = Assessment

console.log(Name)
console.log(Standard)

//b. Nested object destructuring

// let {Name, Marks : {Java, ES6, AWS=10}} = Assessment

// console.log(Name)
// console.log(Java)
// console.log(ES6)
// console.log(AWS)



//Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 
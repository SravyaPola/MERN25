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
//Answer
console.log(Student.FirstName)
console.log(Student.TotalMarks)
console.log(Student.Subject.Physics)
console.log(Student.Subject.Language)
console.log(Student.Subject.Chemistry)

let {LastName = "xyz", Subject : {Ecology = 95}} = Student
console.log(LastName)
console.log(Ecology)
console.log(Student)

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring
const aspirations = ["abc", "def", "ghi", "lmn","wxyz"]
let [a2024, a2025, a2026, ...rest] = aspirations
console.log(a2024)
console.log(a2025)
console.log(a2026)
console.log(rest)

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
//Answer
function multiplication(m1=0, m2=0, m3=0) {
    if(m1 && m2 && m3){
        return m1*m2*m3
    }
    else{
        return 0
    }
}

console.log(multiplication())
console.log(multiplication(1,2,3))

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
//Answer
let arr = [5,6,7,8,9]
arr["newVal"] = 10
arr.push(11)
for(const val of arr){
    console.log(val)
}
for(const index in arr){
    console.log(index)
}


//create an example of const where we can update on property of the object, where it says const is mutable
//Answer:
// const prevents reassignment of the variable itself but does not make the object it holds immutable. 
// You can still modify properties of an object declared with const.
const person = {
  name: "Sravya",
  age: 25
};

// Updating a property (allowed)
person.age = 22;
console.log(person.age); 

// Adding a new property (allowed)
person.city = "California";
console.log(person.city); 


//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

// Using var-var does not have block scope; instead, it has function scope.
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`var i: ${i}`); // Expected to print 3 three times due to functional scope
  }, 2000);
}

// Using let-let has block scope, meaning each iteration gets its own separate instance of j
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(`let j: ${j}`); // Expected to print 0, 1, 2 due to block scope
  }, 2000);
}
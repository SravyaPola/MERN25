// 31st March - 2025 : ES6, eventloop and core JS questions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left
// 7th requires proper elaboration and example

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//Answer 

//a. 
let heroesNotEvil = heroes.filter(hero=>hero.isEvil==false);
console.log(heroesNotEvil)

//b.
let uniqueFamily = heroes.reduce((prevVal, currVal, index, array)=>{
    prevVal[currVal.family] = prevVal[currVal.family] ? prevVal[currVal.family] + 1 : 1
    return prevVal;
}, []);
console.log(uniqueFamily)

//c.
let heroObjWithSir = heroes.map((hero)=> {
            return {"name" : "Sir "+ hero.name}
})

console.log(heroObjWithSir)

//d.
let heroInMarNotEvil = heroes.map(hero=> (hero.family == "Marvel"  && hero.isEvil == false) ? hero.name : "").filter(names=>names!="")

console.log(heroInMarNotEvil)


//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one


//Answer
function multiplyNumbers1(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
const numbers = [1,2,3,4,5]
console.log(multiplyNumbers1.apply(null, [...numbers]));


//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

//Answer 
console.log(person.userDetails.last)
let {  userDetails : {contactNo = 9119119110} } = person
console.log(contactNo)

//4. Give me an example of const data manipulation

const job = {Name : "Teacher", experience : 2}

job.Name = "Developer" 
job.experience = 3

console.log(job)

//5. What is the difference between for-of and for-in show with examples

// For_of Loop -- prints values
let fruits = ["apple", "banana", "orange"]

for(const valuesOfFruits of fruits){
    console.log(valuesOfFruits)
}

// For_in Loop -- prints index
for(const indexOfFruits in fruits){
    console.log(indexOfFruits)
}

//6. Give me an example of bind and write its usage, comparison with arrow function
//Using Bind
const Student1 = {
    name: "Sravya",
    age: 24,
    getDetails: function() {
        setTimeout(function() {
            console.log(`Student: ${this.name}, Age: ${this.age}`);
        }.bind(this), 2000);
    }
};
Student1.getDetails(); //Student: Sravya, Age: 24

//Using Arrow Function
const Student2 = {
    name: "Sravya",
    age: 24,
    getDetails: function() {
        setTimeout(() => {
            console.log(`Student: ${this.name}, Age: ${this.age}`);
        }, 2000);
    }
};
Student2.getDetails(); //Student: Sravya, Age: 24

//7. Create an example showing usage of event loop in concurrent execution cycle

console.log("1. Start"); // Synchronous task

setTimeout(() => {
    console.log("2. Inside setTimeout (Executed later)");
}, 0); // Asynchronous (sent to the Callback Queue)

Promise.resolve().then(() => {
    console.log("3. Inside Promise (Microtask)"); 
}); // Microtask (higher priority than setTimeout)

console.log("4. End"); // Synchronous task


//8. create an example showing usage of short hand and default param.
//Default parms
function multiplication(m1=0, m2=0, m3=0) {
    if(m1 && m2 && m3){
        return m1*m2*m3
    }
    if(m1 && m2){
        return m1*m2
    }
    if(m1){
        return m1
    }
    else{
        return 0
    }
}

console.log(multiplication())
console.log(multiplication(1,2,3))
//ShortHand
let Student = "learn", Teacher = "teach", Doctor = "treat", Engineer = "build"; 

let StudentShortHand = {
    Student,
    Teacher,
    Doctor,
    Engineer
}
console.log(StudentShortHand)


//9. Create two objects with some properties and merge them using Object method and ES6 way

var employee1 = {name : "ABC", age : 21, profession : "Developer"}
var employee2 = {name : "DEF", work: "loading", report : "manager"}

var employeeList = {};
employeeList = Object.assign({}, employee1, employee2) //the last source will replace common values

console.log(employeeList)

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

//Using Map
let strongMap = new Map();
let weakMap = new WeakMap();

let person1 = []

strongMap.set("a" , "b")
strongMap.set(person1, ["ABC", "DEF"])

console.log(strongMap)
weakMap.set(person1, ["Sravya", "Manaswi"])

//Usng Set
let Asia = new Set()

Asia.add("India")
Asia.add("China")
Asia.add("India") 

console.log(Asia)

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let StuLogin = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve({
            status : "Success",
            code : 200,
            message : "Authentication Success",
        })
    }, 2000); 
    setTimeout(() => {
        reject({
            status : "Failed",
            code : 500,
            message : "Internal server error!!"
        })
    }, 3000);

})

StuLogin
.then((response)=>{ 
    console.log(response) 
})
.catch((err)=>{ 
    console.log(err)
})


//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

function multiplyNumbers(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
const nums = [1, 2, 3, 4, 5];
console.log(multiplyNumbers(...nums)); 

//13. Use the question #11 to build promises using async and await - with multithread

function StuLogin1() {
  return new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve({
            status : "Success",
            code : 200,
            message : "Authentication Success",
        })
    }, 2000); 
    setTimeout(() => {
        reject({
            status : "Failed",
            code : 500,
            message : "Internal server error!!"
        })
    }, 3000);

})
}
async function printStuLoginInfo(){
    await StuLogin1().then((data) => {console.log(data)})
}

printStuLoginInfo()

//14. Create an example of generator function of your choice

function* countUpTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}
const counter = countUpTo(5);
for (let num of counter) {
    console.log(num);
}

//15. Explain your knowledge on function and object protoype what is the purpose of the same - example

//Using functionprototype

function Person1(name, age) {
    this.name = name;
    this.age = age;
}
Person1.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
const p1 = new Person1("Alice", 25);
const p2 = new Person1("Bob", 30);

p1.greet();

//USing Object Prototype
const animal = {
    makeSound: function() {
        console.log("Some generic animal sound");
    }
};

const dog = Object.create(animal); // dog inherits from animal
dog.makeSound(); // Output: Some generic animal sound

// Adding a new method to dog
dog.bark = function() {
    console.log("Woof! Woof!");
};

dog.bark();
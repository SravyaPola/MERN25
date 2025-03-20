//ES-2015 or ES6

//let and const are added in es6

//1. Scope 
//var - is functional scope
//let and const are lexical scope or block scoped

// {
//     var name = "Var Name"
//     let let_name = "Let Name"
//     const const_name = "Const Name"

//     console.log(let_name)
//     console.log(const_name)
// }

// console.log(name)

//console.log(let_name) //can't access
//console.log(const_name)

//2. Assignemt and Declaration-
// var - variable can be declared and assigned as many times as possible

// let - can be declared for once and assignment of new values can be done any times

// const - can't be re-declared and needs to assign the value as soon as we define it, also value can't be updated 

{
    var name = "Var Name"
    let let_name; //declare and assign later
    let_name = "Let Name"

    //const const_name;// we need to assign as soon as we declare
    //const_name = "Const Name"

    const const_name = "Const Name"

    console.log(let_name)

    var name = "Var Name" // multiple re-declarations
    //let let_name = "Let Name" // re-declaration is not allowed

    let_name = "LEt Name 2"
    console.log(let_name)

    console.log(const_name)

    //const_name = "Const Name2" // re-assignment is not allowed

    //console.log(const_name)
}

// constants are immutable - but can be updated with reference values

const user = {firstName : "Test", lastName : "Me"}

//user = {}

user.firstName = "Tony" //reference to the constant object is updated
user.lastName = "Starc"

console.log(user)


for (var i = 0; i  < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 3000);
}

console.log(i)

for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index)
    }, 3000);
}

//console.log(index)
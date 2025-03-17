//Call and Apply are the extended functions present in the function definition,which allows to change or update the scope of the
// given function by passing the object as a parameter

// Whenever we set object and invoke call or apply it immediately executes the function with the scope of new object passed

//Call - function.call is used to accept first parameter as an object which we want to apply as scope in the function, 
// and second and subsqeuent parameters will be used to pass function parameters

//Apply - function.apply is used to accpet first parameter as an object which we want to apply as scope in the function, 
// but the second parameter will be an array of data that we need to pass as functions own parameter

//Account is a Java Class
//getAccountDetails - is defined in that class
//AccountObj.getAccountDetails() //scope of AccountDetails method is account class

//globalThis.FName = "Mike"

var user1 = {FName : "Dat", Location : "Somewhere in australia", Age : 20};
var user2 = {FName : "Jermeiah Dy", Location : "Somewhere in france", Age : 21};


function PrintInfo(msg, additionalInfo) {
    //console.log(this) //the scope or the context of execution - global when function is not attached to any object
    //console.log(user1.FName)
    console.log(`
        ${msg}
        ${additionalInfo}
        ${this.FName}
        ${this.Location}
        ${this.Age}
        `)
    //console.log(this.FName)
}

//PrintInfo() //this execution of function happens in a global scope, which is js environment or node js envt

PrintInfo.call(user1, "Software Engineer", "MERNStack Expert") //immediately executes and returns value with new object as its scope
PrintInfo.call(user2, "IT Professional", "AI Expert")


var Car = {Brand : "Tesla Car", Name : "AI-Tesla", Price : "$100000"}
var Jeep = {Brand : "Mahindra Jeep", Name : "Manual", Price : "$150000"}

function VehicalInfo(make, model, year, gears, automatic, groundClearance, airbags, crushTestValue) {
    console.log(`
        ${make}
        ${model}
        ${year}
        ${gears}
        ${this.Brand}
        ${this.Name}
        ${this.Price}
        `)
}

//lets say all informations about vehical accepted in a parameter we'll get from API
// in the form of array

var basicInfo = ["US", "First", "2025", "6", "yes", "10 inches", "5", "4.5"]

VehicalInfo.call(Car, "US", "First", "2025", "6")

VehicalInfo.apply(Car, basicInfo)
VehicalInfo.apply(Car, basicInfo)

var ArithmeticData = {msg:"We are doing sum", data:"This is array list"}

var Sum = function (n1, n2, n3, n4, n5) {
    var sum = n1+n2+n3+n4+n5;
    return console.log(`
        ${this.msg} 
        ${this.data} 
        ${sum}`)
}

var numList = [1,2,3,4,5]
var numList2 = [100,2221,3332,44455,5555656]

Sum.apply(ArithmeticData, numList)
Sum.apply(ArithmeticData, numList2)



//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases
// Generator - functions are special type of functions which can be invoked once and would yield the value
// for as many times as we need
// return - marks the end of execution
// yield - is used to get the data on each function.next() call


// function Add(p1, p2) {
//     //n - times
//     return p1+p2
// }

// Add(5,5) //invoking and functions job is done
// Add(5,5)
// Add(5,6)

function *GeneratorFunc(p1, p2) {
    //api call and wait then yeild
// yeild have value and done ? false : true
    yield "First Yeild Without Invocation" + (p1+p2)

    yield "Second Yeild Without Invocation" + ((p1+p2)*2)

    yield "Third Yeild Without Invocation" + ((p1+p2)*3)

    return "Function Returned Nothing can be yeild further"

    yield "Fourth Yeild Without Invocation" + ((p1+p2)*4)
}

let genFuncObj = GeneratorFunc(5,5)

console.log(genFuncObj.next())
console.log(genFuncObj.next())
console.log(genFuncObj.next())
console.log(genFuncObj.next())
console.log(genFuncObj.next())



function getIncrements(incrementedValue = 0) {
    return incrementedValue+1
}

function *ShowpopupaltionIncremnt(baseValue, reduceByDeaths) {
    var incrementedValue = getIncrements(incrementedValue) 

    console.log(baseValue + incrementedValue)

    yield {count : baseValue + incrementedValue} //when we call for first yield

    incrementedValue = getIncrements(incrementedValue) 

    yield {count : baseValue + incrementedValue} //when we call for second yield

    incrementedValue = getIncrements(incrementedValue) 
    yield {count : baseValue + incrementedValue} //when we call for third yield

    //return means end of invocation
    return baseValue + incrementedValue   
}

let populationPointer = ShowpopupaltionIncremnt(80000, 1000) //initializing with data

console.log(populationPointer.next()) //first yeild
console.log(populationPointer.next()) //second yeild
console.log(populationPointer.next()) //third yeild

console.log(populationPointer.next()) //returns from execution

console.log(populationPointer.next()) //no further yeild is done


//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator
function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));

    yield console.log("Subtraction : " + (num1-num2));
    
    yield console.log("Multiply : " + (num1*num2));
    
    yield console.log("Division : " + (num1/num2));
    
    return "Done";
}

let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())
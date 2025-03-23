//overloading - is the oops feature which on the basis of different parameters gives different variation of a function
// a same name function can be used in different ways by just changing the number and type of parameters

//however there is no concept of overloading in JS functions instead we have over-writing concept where the last function
//definition replaces all in top and gets hoisted as well

console.log(Sum(5,6)) // 11
function Sum(p1, p2) {
    console.log("2 Params")
    return p1+p2
}

console.log(Sum(5,6)) // 11
function Sum(p1, p2, p3) {
    console.log("3 Params")
    return p1+p2+p3
}
console.log(Sum(5,6,5)) // 16

console.log(Sum()) // 0

//the hoisted function
function Sum() {       // upto here all are funtions
    console.log("no params accepted")
    return 0 //As this the last defined Sum(), so all the Sum(x, y,....) goes here only.
}
console.log(Sum(5,5)) // 10

console.log(Sum(5,5,5,5)) // until here all the Sum() functions will go to Sum() because its the last function

var Sum = function(p1, p2, p3, p4) { // here is the variable not function
    console.log("function epxression")
    return p1+p2+p3+p4
}
console.log(Sum(5,5,5,5)) // 20


//create and example of overloading where you can attend 3 sessions on a day and 4 sessions on another
//print name of the sessions

//SOLUTION TO ABOVE PROBLEM

function attendance(s1 , s2 , s3 , s4 ){
    if(s1 && s2 && s3 && s4){
        console.log("Attended 4 sessions")
        return {s1 , s2 , s3 , s4}
    } 
    if(s1 && s2 && s3){
        console.log("Attended 3 sessions")
        return {s1 , s2 , s3}
    }
    else{
        console.log("Attended neither 3 nor 4")
        return 0
    }
}

console.log(attendance("A", "B", "C"))
console.log(attendance("W", "X", "Y", "Z"))
console.log(attendance())
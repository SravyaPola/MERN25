
console.log("Execution Starts") //start

setTimeout(function () {
    console.log("First Callback")

        setTimeout(function () {
            console.log("Inner Callback")
        }, 0) // after 1 secnd
}, 3000) //after 1 secnd


setTimeout(function () {
    console.log("Second Callback")
}, 3000) //after 1+2 secnd


setTimeout(function () {
    console.log("Third Callback")
}, 3000) //after 1+2+3 secnd

console.log("Execution Ends")  //last

//compare settimeout 1000, 2000, 3000 with settimeout 3000 3000 3000



////////////////

// for (var index = 0; index < 5; index++) {
    
//     //settimeout is a timeout function provided to add delay
//     setTimeout(function () {
//         console.log("in loop", index) //expected to execute with incremented value every second but it executes 5 times after 1 sec
//     }, 1000) // second parameter is in milli-seconds
    
// }

// console.log("out of loop", index) //this should not have the accessibility outside of loop but it is accessible
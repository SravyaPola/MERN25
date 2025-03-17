//callstack - a memory space allocated to main thread for executing the programme written in given run time

//js - is a single threaded programming language so we get one thread for each execution cycle

//console.log("My Name is Some Name")//

//window.alert("My Name is Some Alerted Name")//

// function foo(params) {
//     throw new Error("Eexcution happens in callstack as LIFO");
// }

// function bar() {
//     foo()
// }

// function baz(params) {
//     bar()
// }

// baz(); //function execution


//exhausting the allocated space of call stack

function baz() {
    baz()
}

baz();
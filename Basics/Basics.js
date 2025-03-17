//console.log("sum of 5 and 5 is", 5+5)
//var iknowJS = confirm("do you know js");
//console.log(iknowJS);

var counter = 0;
//console.log(counter)

function incrementCounter() {
    var counter2 = 1; //local variable of the function
    counter++
    console.log(counter)
    //console.log(counter2)

    if(counter<10000)
        incrementCounter()
}

//console.log(counter2)

//incrementCounter()
//console.log(counter)

// var counter = 0;
// console.log(counter)

// semicaolons are optional ;

//dynamic typing - is present to assign any data type to the variable

//autocasting - it also allows to reassign and change the data type at the moment of re-assignment

//cls - can be used to clear terminal data
//ctrl + c -to stop indefinite execution

//commenting we use - ctrl+/ (toggle)
// 


//multiline comment

/*
var counter = 0;
console.log(counter)
*/


//for, foreach, while, do-while all loops present in JS

//typeof - var name is used to check the datatype

//array can be created, and are dynamic
//var numbers = [1,2,3,4,5]

//identifiers/variables - case sensitive

var my_Name = "Some name"
var My_Name = "Some other name"

//space not allowed, special chars apart from _,$ , others are not allowed

var $myname = "Dollar Name",
 _myname = "underscore Name",
my_Name5 = "Numeric Name"
 //5myname - starting from number is not allowed

console.log(my_Name, My_Name, $myname, _myname , my_Name5)


// operators



//public Car {
   // getCarSpecification(){ ..... }
   // method1
//}

//myClass obj = new myClass()
//obj.method1()
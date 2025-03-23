//Bind - is a function extension present similar to call and apply but can be used in case of delayed execution
// So if we need to bind any object with any event listener like click, hover so that it shows the assigned values 
// in object (scope and context), we will be able to use Bind

//with bind it doesn't execute immediately but is retained as scope in the callback function

var User = {
    FName : "Eric", 
    Location : "Somewhere in australia", 
    Age : 20,

    printInfo : function () {

        //this - is a reserved keyword used to link the objects at the time of execution and it keeps on updating upon every
        // function invocation, and this can be said a context while defining and
        // execution context while executing, always remains in the form of object
        console.log(this); //scope is the User - object as printInfo executes over it        
        console.log("Outer ", this.FName); // Eric

        setTimeout(function () {
            console.log(this); //
            console.log("Inner ", this.FName); // Tejasvi 
        }.bind(this), 2000) //.call(this)

        this.FName = "Tejasvi" // this will always give us the updated context values 
    }
}

User.printInfo() //we are not using bind to keep the context binded

//an example on UI, by doing DOM manipulation

//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Micheal"
// }

// btn.removeEventListener("click",this.onclick)


//second example

//<button id=​"newBtnBind">​Practice Bind​</button>​
//var selectBtn = document.getElementById("newBtnBind")
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)


// Question -

//use the same student object we had for call and apply and try adding them in setTimout of Student Obect with function
// similar to above User.printInfo
// we need to check after 2 second timeout how it returns the value
// then fix the same by a copied variable and using bind and see the difference in light of scope and bind (as above)

// SOLUTION 

// Without USing Bind
const Student = {
    name: "Sravya",
    age: 24,
    getDetails: function() {
        setTimeout(function() {
            console.log(`Student: ${this.name}, Age: ${this.age}`);
        }, 2000);
    }
};
Student.getDetails(); //Student: undefined, Age: undefined


//With Using Bind
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

// Using Arrow Function

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
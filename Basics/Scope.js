
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

        var _this = this //copied the context of outer function in _this variable and using it inside the setTimeout

        setTimeout(function () {
            console.log(this); //
            console.log("Inner ", this.FName); // Eric - but is undefined
            console.log("Inner ", _this.FName); // Eric - from the copied context
            //return "5000"
        }, 2000) //.call(this)

        this.FName = "Tejasvi" //if we copy the context it should not be able to assign the updated values
    }
}

User.printInfo() //scope is the User - object as printInfo executes over it
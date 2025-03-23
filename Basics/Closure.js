//OOPs
//Polymorphism - Overloading (over-writing) and Overriding (by inheriting in constructor function we can override)
//Inheritance - is possible, prototype{ an object that links the child object to base function} : __proto__
//Abstractions - Abstract function/class are not present but function can do abstract implementation
//Encapsulation - We limit the access of properties and fields via access modifiers, we dont have any keywords for this
                // we can manipulate the function to restric the access of function variables


//closure : is a structure where we have a function returning another function with the properties that we need to expose
// We can make the inner functions expose ouside using function 

function Encapsulation() {
    var accountName = "Banking Account"; //public
    var accountBalance = "$10000";//public

    var password = "sdajkj#$@"; //private
    var accountOwner = "Jeremiah Dy"; //private

    //child function - returning function
    var getAccountBalance = function (pass, showBalance) {
        if (password == pass && showBalance) {
            return {
                accountName, //accountName : accountName, 
                accountBalance //accountBalance : accountBalance
            }
        } else {
            return "Authorization Failed!!"    
        }        
    }

    return getAccountBalance;
}

var closureData = Encapsulation()

console.log(closureData("sdajkj#$@a",true))
console.log(closureData("sdajkj#$@",true))


//create an example of your own to explain closure
 
function Closure(){
    var name = "Sravya";
    var phoneNumber = "12345"

    var getPhoneNumber = function(admin){
        if(admin == name){
            return phoneNumber;
        }else{
            return "You are not admin"
        }
    };
    return getPhoneNumber;
}
var phno = Closure();
console.log(phno("roopa"))
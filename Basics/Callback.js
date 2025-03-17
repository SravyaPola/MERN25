// Callback : when we use one function to be called by another function that will be termed as callback function
// the function which we need to be called by another function is passed as a parameter


function PrintInfo(msg, p1) {
    console.log(`${msg} - ${p1}`)
}

function GetUserInfo(name, age, callback) {
    callback("User Name is ", name)
    callback("User Age is ", age)
}
//GetUserInfo("Jason", 21)
GetUserInfo("Jason", 21, PrintInfo)

function Sum(p1, p2, callback) {
    var sum = p1+p2;
    callback("Sum of values is ", sum)
}
Sum(5,6, PrintInfo)


//Question :
//1. create a callback function example for account
//2. PrintAccount details should accept this call back and the account information
//3. Upon executing PrintAccntDetails it should show the account details with a message
//4. Use the same call back to print multiple sessions planned for the day
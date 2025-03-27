// Promises - are the objects act like wrapper which gives us the capability to control the data accessed via API's
// It also helps to identify current state of execution - FullFilled or Rejected or In-Transit
// When we need do async operation this is the best suited approach 

function Authentication(user, authorizationCallBack) {
    //makes a call to server auth api for proper sign/signup process returns information
}

function Authorization(user_id, sessionToken, navigationCallBack) {
    //makes a call to server to fetch the user role 
}

function NavigateToApplication(user_id) {
    // out of all available pages sends back list of pages he should be redirected to and the page he last visited
}

//callbacks - when we have some issues of service failure which are not handled in proper modularized way
// this leads into a continous callback execution and creates as situation like hell and is
// termed as callback hell

// we can further mature and add more modularized check to handle responses but still a more feasible solution is to add promises

// function Sign(authenticationCallback) {
    
//     let response = authenticationCallback(user, authorizationCallBack) //2 minutes

//     if(response.valid){
//         let authResponse = authorizationCallBack(user_id, sessionToken, navigationCallBack) //1 minute

//         if (authResponse.validRole) {
//             let pageList = navigationCallBack(user_id, authResponse.role) //30 seconds
//         } else {
//             Sign(authenticationCallback, user) //call again to get valid info incase of failure

//             //navigate to payment page or show them some cacthy templates about application
//         }
//     }else{
//         //navigateToErrorPage or IncorrectPasswordPage or resetPassword
//     }
// }


//Promise is a pre-defined class we can use as below

let promiseObj = new Promise((resolve, reject)=>{

    //promise executes authenticationCallback recives the data from API and stores in response
    // let response = authenticationCallback(user, authorizationCallBack) //2 minutes
    // if (response.valid) {
    //     resolve(response)
    // }else{
    //     reject(response)
    // }

    setTimeout(() => {
        resolve({
            status : "Success",
            code : 200,
            message : "Authentication Success"
        })
    }, 3000); //3 seconds wait to make it feel like making a call to server

    setTimeout(() => {
        reject({
            status : "Failed",
            code : 500,
            message : "Internal server error!!"
        })
    }, 3000); //3 seconds wait to make it feel like making a call to server

})
// change settimeout time to observe the diffrences in resolve and reject

// console.log(promiseObj)

promiseObj
.then((data)=>{ //this access the data send when promise is resolved
    console.log(data) //upon success you'll make call to authorization
})
.catch((err)=>{ // this access the data send when promise is rejected
    console.log(err)
})


// console.log("at end ", promiseObj )

//Always remember -- 
// 1) Keeping resolve(3 seconds) before reject(4 seconds) ensures it has a chance to complete.
// 2) Keeping reject(3 seconds) before resolve(4 seconds) ensures failure every time.
// 3) Using the same time may lead to unpredictable results.(res(3s), rej(3s))


// create a promise with name student login
// resolve it after 3 seconds and set student details with call status in the response object
// reject it after 4 seconds and set error details with call status in the response object

//Answer

let StuLogin = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve({
            status : "Success",
            code : 200,
            message : "Authentication Success",
            student: {
                id: 101,
                name: "Sravya",
                course: "Mern Stack"
            }
        })
    }, 3000); 
    setTimeout(() => {
        reject({
            status : "Failed",
            code : 500,
            message : "Internal server error!!"
        })
    }, 4000);

})

//console.log(StuLogin)

StuLogin
.then((response)=>{ 
    console.log(response) 
})
.catch((err)=>{ 
    console.log(err)
})

//console.log(StuLogin)

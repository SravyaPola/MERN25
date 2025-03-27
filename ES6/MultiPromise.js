// Promise class has two methods Promise.all and Promise.allSettled - to help making concurrent execution of all the promises supplied in them
// depending upon the need of task any one or both the methods can be used

// we will need to show the more features, products and other sales options to the signed in user
// all these calls are not having dependency on each other they just needed a successful sigin/signup

// getUserHistory(userid)
// getProductList(userid)
// getFutureSalesList(userid)


//Promise1
// let getUserHistory = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve({
//                 status : "Success",
//                 msg : "Fetched user history of navigations",
//                 code : 200
//             })
//         }, 4000)

//         setTimeout(() => {
//             reject({
//                 status : "Failed",
//                 msg : "Failed to fetch user history of navigations",
//                 code : 400
//             })
//         }, 4000)
// })

//Promise2
// let getProductList = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({
//             status : "Success",
//             msg : "Fetched user history of products",
//             code : 200
//         })
//     }, 4000)

//     setTimeout(() => {
//         reject({
//             status : "Failed",
//             msg : "Failed to fetch user history of products",
//             code : 400
//         })
//     }, 4000)
// })

//Promise3
// let getFutureSalesList = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({
//             status : "Success",
//             msg : "Fetched user history of Future Sales",
//             code : 200
//         })
//     }, 4000)

//     setTimeout(() => {
//         reject({
//             status : "Failed",
//             msg : "Failed to fetch user history of Future sales",
//             code : 400
//         })
//     }, 3000)
// })


//concurrent execution can be done for each promise
//all of them will be async
// getUserHistory.then(()=>{ output }).catch(()=>{ failed })
// getProductList.then(()=>{ output })
// getFutureSalesList.then(()=>{ output })

//1. All the promises needs to be completed either resolved or reject then only we should make it work
// Waits for all promises to resolve or (rejects immediately if any promise fails.)
// If any one promise fails, the entire Promise.all() rejects with that one promise error., If all succeed, returns all promises
// When you need all promises to succeed and can’t proceed if even one fails.

// Promise.allSettled([
//     getUserHistory,
//     getProductList,
//     getFutureSalesList
// ]).then((data)=>{
//     console.log(data)
// })


//2. if anyone of the above fails we should not do any next job or show next page
// Waits for all promises to settle (either resolved or rejected) and returns an array of their outcomes.
// Never rejects; instead, it returns the status (fulfilled or rejected) for each promise.
// When you need results from all promises, even if some fail.

// Promise.all([
//     getUserHistory,
//     getProductList,
//     getFutureSalesList
// ]).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


//create promise of four concurrent sessions of a day and try to resolve and reject them

//Answer to above question

let session1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            code: 200,
            status: "success",
            message: "Fetched Session1"
        })
    }, 3000)
    setTimeout(() => {
        reject({
            code: 400,
            status: "fail",
            message: "Failed sesssion1"
        })
    }, 3000)
})

let session2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            code: 200,
            status: "success",
            message: "Fetched Session2"
        })
    }, 3000)
    setTimeout(() => {
        reject({
            code: 400,
            status: "fail",
            message: "Failed sesssion2"
        })
    }, 2000)
})

let session3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            code: 200,
            status: "success",
            message: "Fetched Session3"
        })
    }, 3000)
    setTimeout(() => {
        reject({
            code: 400,
            status: "fail",
            message: "Failed sesssion3"
        })
    }, 3000)
})

let session4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            code: 200,
            status: "success",
            message: "Fetched Session4"
        })
    }, 3000)
    setTimeout(() => {
        reject({
            code: 400,
            status: "fail",
            message: "Failed sesssion4"
        })
    }, 3000)
})

Promise.all([
    session1,
    session2,
    session3,
    session4
]).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

Promise.allSettled([
    session1,
    session2,
    session3,
    session4
]).then((data)=>{
    console.log(data)
})
let expressObj = require("express")

let router = expressObj.Router({})
const fs = require("fs");

//NodeAPI
//1. Explain your knowledge of - statelessness, http, REST, spa and classical applications

// a) statelessness-
//It means server does not remember anything about the user or request after it is handled
//Every request is treated as completely independent

// b) http-
// HTTP is a protocol used for transferring data over the web, following a request-response model. 
// It is stateless by design, where each interaction is independent.

// c) spa-
//A SPA loads a single HTML page and dynamically updates content via JavaScript without reloading the page.

// d) Classical Applications (Multi-Page Applications):
//Classical apps reload the entire page from the server for each user interaction or route change. 
// They often rely on server-side rendering and form-based submissions

//2. Create an express setup, with a capability to expose end points for restful api
//This the newly created node express setup

//3. Create an API with name CreateUser as get verb and pass user info such as name, session, address and age as query string / route param
//4. Save the information passed in #3 to a json file name userInfo in local

// Everything is done below

router.get('/', (req, res) => {
    res.send('Hello World')
})



router.get('/CreateUser/:name/:session/:address/:age', (req, res) => {
    const name = req.params["name"]
    const session = req.params["session"]
    const address = req.params["address"]
    const age = req.params["age"]
    let datafromurl = {
        'name' : name,
        'address' : address,
        'session': session,
        'age': age
    };
    var newData = JSON.stringify(datafromurl);
    fs.writeFile("userInfo.json", newData, (err) => {
         if (err) throw err;
         console.log("New data added");
    });
    res.send(newData)
})

module.exports = router;
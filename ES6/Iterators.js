// With the increasing load of data and manipulations required in it developers needed some new features
// so that it can help them create/extract/modify data out of available array of object
// this also assures the principle of immutability where our core object or base object remains consistent throught

// Four new Iterators are included to achieve these funcationalities
// 1. Filter, 2. Map, 3. Some , 4. Reduce

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Batman"}
]

//1. Give me list of the persons saved by Iron Man

let prsnSavedByIronMan = personsList.filter(prsnObj=>prsnObj.savedby == "IronMan")

console.log(prsnSavedByIronMan)

console.log(personsList)

//2. Give me list of the names saved by CA - using Map

let nameListSvdByCA = personsList.map(persnObj=> persnObj.savedby == "CaptainAmerica" ? persnObj.name : "").filter(names=>names!="")

console.log(nameListSvdByCA)

// append sir before the name and also change the key from name to Citizen

let nameObjWithSir = personsList.map((persnObj)=> {
            if(persnObj.savedby == "CaptainAmerica")
            {
                return {"Citizen" : "Sir "+ persnObj.name}
            }
        }).filter((names)=>names!= undefined)

console.log(nameObjWithSir)


//3. Is there anyone saved by Hulk - returns boolean true or false 
// Some operator works as short circuit to check the condition if its present return true and return back from loop

let SavedByHulk = personsList.some(persnObj=>persnObj.savedby=="Hulk")

console.log(SavedByHulk)

let SavedByBatman = personsList.some(persnObj=>persnObj.savedby=="Batman")

console.log(SavedByBatman)

//4. When we need to backtrack, keep checking the current value, need an object to accumulate and also need the base object in each
// iteration to perform an aggregate, we use reduce operator, which works exactly the same way as its name to 
// reduce a complete new data with mulitple operations

// Task : give me the count of the persons saved by each superhero uniquely

let uniquePersnCount = personsList.reduce((prevVal, currVal, index, array)=>{
    console.log(prevVal)
    console.log(currVal)

    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1
    
    return prevVal;
}, []);//new Set());//initialize the value to be present in prevVal for the first time

console.log(uniquePersnCount)



//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag

//Answer
let personWithJsTag = persons.map(person => person.tags == "javascript"? person.name: "").filter(names=>names!="")
console.log(personWithJsTag)

//2. List the name of person using java and put programmer after their name, change the name key to Developer

//Answer
let personUsingJava = persons.map((person) =>{
    if(person.tags == "java"){
        return {"Developer" : person.name + " programmer"}
    }
}).filter((names)=>names!= undefined)
console.log(personUsingJava)

//3. If we have anyone with tag python

//Answer
let personWithPythonOrNot = persons.some(person=> person.tags == "python")
console.log(personWithPythonOrNot)

//4. Find the number of unique tags and their count present in list

//Answer
let uniqueTags = persons.reduce((prevVal, currVal, index, array)=>{
    prevVal[currVal.tags] = prevVal[currVal.tags] ? prevVal[currVal.tags] + 1 : 1
    return prevVal;
}, []);
console.log(uniqueTags)



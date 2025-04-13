const express = require('express');
let router = express.Router({})

//http://localhost:9000/profile/1
router.get('/profile/:id', (req, res) => {
    const studentId = req.params.id;
    console.log(studentId);
    res.send(`Student Profile ID: ${studentId}`);
});

//http://localhost:9000/search?name=Sravya&&age=24
router.get('/search', (req, res) => {
    const queryParams = req.query;
    console.log(queryParams);
    res.send(`Searching student with name: ${queryParams["name"]} and age: ${queryParams["age"]}`);
});
//http://localhost:9000/getFile
router.get('/getFile', (req, res) => {
    res.sendFile(globalThis.rootPath+"/public/student.html")
});

//http://localhost:9000/getInfo
router.get('/getInfo', (req, res) => {
    res.send('student file in action');
});

//http://localhost:9000/allStudents
router.get('/allStudents', (req, res) => {
    const students = [
        { id: 1, name: "John Doe", age: 18 },
        { id: 2, name: "Jane Smith", age: 19 },
        { id: 3, name: "Alice Johnson", age: 20 },
    ];
    res.json(students);
});

module.exports = router;

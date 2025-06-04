let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack19 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1:27017/data25");

let studentSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required : true},
    street: String,
    mobile: Number
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let StudentModel = mongooseObj.model("student", studentSchema);//user - collection name, pluralised by mongodb

module.exports = StudentModel; //with capability to retrieve save udpate queries with mongo db

console.log("MongoDB connection with user datamodel is established!!")
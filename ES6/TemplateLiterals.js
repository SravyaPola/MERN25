//Template Literals - are the helper tools present in ES6 which allows us to write string, expressions and html
// without the issues of concatenation, or line continuation
// uses backtick or tilde operators to start and end the Template

//` --- your data ---`

//for any expression or field value uses ${fieldName}-
console.log(` --- your data ${5+5} ---`)

//to import anything in core JS we use require module, which needs absolute file path for files in our directory
//just the module name if checking installed library files

let dynVal = " $$ Template Literals are smart $$"

let AnimalSoundsES6 = require("./shortHand"); //no file extension required

let templateWithoutLiteral = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "<h1>Header</h1>"+
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum \n" +
                    JSON.stringify(AnimalSoundsES6);
console.log(templateWithoutLiteral)


let templateWithLiteral = `Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     <h1>Header</h1>
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        ${JSON.stringify(AnimalSoundsES6)}`;
console.log(templateWithLiteral)


//try wiriting your favourite quotes on life lessons or from tech experts
// in expression you need to write the expert name or reference

let auther = "Martin Luther King"
let quote = `I have a dream -- by ${auther}`

console.log(quote)
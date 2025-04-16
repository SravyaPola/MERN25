// Single Page Application - 
// We need to work on -
//1. Transpilation - converting all the ES6, React, Redux, etc code to core js 
   //-- Babel
   //Modern JavaScript (ES6+), JSX (React), and advanced syntax need to be converted into older JavaScript (ES5) 
   //so that all browsers can understand and run the code.


//2. Dependency Resolution - loading the dependent file needed before the current file executed
   //-- WebPack by itself
//3. Shimining/ Fallback - implementing the feature by using third party library which is not present on current browser
   //-- WebPack by itself
//4. Minification - Extra Lines, commented code, spaces gives improvement in file size
   //-- Minify 
//5. Code Optimization -  true?asdasdasdas:asdasda
// if(){
////asdasdasdas
// }
//else 
//{
//asdasda
//}
//var sdasdkajsdhashdashdasj = sadsakdnka
//a1
   //-- Optimize or WebPack by itself
//6. Image Resizing - reducing the number of calls by converting image into a base64 encoding and not fectching from the server
    // npmjs module
//7. CSS Files - resolving and using css files and loading them on bundle
    // css module, 
//8. Creating - 1 common bundle for html, js and css + media
    // WebPack by itself

// All these tasks can be done by Task Runner  => Gulp, Grunt, Bower(css, media), WebPack

// App hosting => Webpack, IIS, Tomcat/Apache, Express, etc
// Local hot reloading (by cashing) => Webpack, IIS, Tomcat/Apache, Express, etc
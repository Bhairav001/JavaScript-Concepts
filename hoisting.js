// let a;   //declaration
// a=1000;  //Assignment
// console.log(a) //Usage


// function codeHoist(){
//     a=10;
//     let b=50;
// }
// codeHoist()

// console.log(a) //10;
// console.log(b)   //ReferenceError: b is not defined

// console.log(name)
// let name = "ok"   //ReferenceError: Cannot access 'name' before initialization;




// console.log(name)
// var name = "ok" // undefined


// var name;

// console.log(name)
// name="bhairav"

// test()
// function test(){
//     console.log("hoisting")
// }



test();

function test(){
    console.log("hoisting")
}

x=1;
console.log(x)
var x;

//it allows variable and function declarations to be move thier top of there scope 

//use can use variable and function in your code before they declare in source code

//
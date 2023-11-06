console.log(undefined==null)  //true
//strict type of checking
console.log(undefined===null) //false

//undefined and null is falsy value,

/*


In JavaScript, the term "undefined" is a special value and data tye.
it typically represents the absence of a value or the default value of a variable that has been declared but has not assignend value





*/


//declaring variable without assigning a value;
let myVariable;
console.log(myVariable)   // output: undefined;

//here we declare a varable "myVariable" but do not assign it a value,
//so it has default value of "undefined"



//A function that does not return a value explicitly
function doSomething(){
    //No return statement here
}

//here we have a functioin "doSomething" that doesn't return a value explicitly.
// When we call this function and try to assign its result to the "result" varable, "result" is assigned the value "undefined"


const result = doSomething()
console.log(result)  //output: undefined;
//in third example, we have an object "myObject",a nd we try to access a property
//that doesn't exist in the object. The result is also "undefined";



/*
note :
it's important note that "undefined" is a distinct data type in javascript,
and it is different from "null", which represents the intentional absence of any object value.
when a variable is declared but has no value assigned to it, or when a function does't explicitly return a value, Javascript assigns it the value "undefined"



*/


let myObject = {}

console.log(myObject.nonExistentProperty) //output: undefined;


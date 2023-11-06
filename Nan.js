console.log(NaN==NaN) //false

console.log(NaN===NaN)  //false

/*
In JavaScript, "NaN" stands for "Not-a-Number", and it is a specia value that 
represent the result of an invalid or unrepresentable mathematical operation.
It is used to indicate that a value is not a valid number

*/


let result =10/"apple"
console.log(result) //output: NaN;


//using isNaN() to check if a value is NaN

const value1 = NaN;
console.log(isNaN(value1));  //output: true;


const value2 = 42;
console.log(isNaN(value2));   //false;


const sqrtOfNegativeNumber = Math.sqrt(-1)
console.log(sqrtOfNegativeNumber)


// we attempt to divide the number 10 by the string "apple"
//which is not a valid mathematical operation. A a result, the value of "result" is "NaN"




// In the second of examples, we use the "isNaN()" function to check if a value is "NaN". 
//"isNaN(value1)" return true becasue "value1" is NaN, while isNaN(value2) return fasle becasue value2 is a valid number;


//NaN is a special value that is not equal value that is not equal to any other value
//including itself. This means that you cannot use the equality operator(== or ===) to check if a value is NaN.
//instead, you should use the isNaN() function as demonstrated in the examples abouve



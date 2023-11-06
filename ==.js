[]==[] //false
// {} == {} //error return false

/*
== operator is used for comparison between two values. It checks whether the values are eual, but it performs type coercion, which means it can convert the values to a common type before making the comparison. This can sometimes lead to unexpected results, so it's important to understand how it works.


c
*/

console.log(5=="5") //true
console.log(5==="5") //false

console.log(true==1) //true
console.log(true===1) //false

console.log(false==0) //false;
console.log(false===0) //false;

//Null and undefined;

console.log(null==undefined) //true;
console.log(null===undefined) //false

console.log({}=={})  //false;
console.log({}==={}) //false;

console.log([1,2,3]=="1,2,3") //true;
console.log([12,3]==="1,2,3") //false;

console.log(NaN==NaN) //false;
console.log(NaN===NaN) //false

console.log(""===0) //false;


//using === is generally considered suger and more predictable because it doesn't perform coercion, and it checks for bothe value and type equality.



console.log(""==0) //true;


/*
As you can see, the == operator compares values after performing type coercion
it tries to make the values on both sides of the operator the same type before making the comparison. This behavior can lead to unexpected results, expecially when comparing values of different types

to avoid the potential issues withe type coercios, 

*/
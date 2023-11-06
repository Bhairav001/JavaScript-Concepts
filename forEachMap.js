// let arr = [1,2,4,5,6]

// arr.forEach((el,index,arr)=>console.log(arr))


/*

The main difference between forEach() method and map() method is the forEach method doesn't return a new Array [it return undefined] 
where as the map() return a new array with the modified elements

if we need the returned/new array with the modified data, we would pick map(), because it return a new array with the modified data.

if we just want to traverse on the given array and don't need the returned array with the modified values, we will use forEach()


*/


let arr = ["apple","windows","ubuntu"]  //print the length of each string

arr.map((el,index,arr)=>console.log(el.length))

let str = ["Masai","School"];
str.forEach((el)=>console.log(el[0]))
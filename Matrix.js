let count=1;

for(let i=1; i<=4; i++){
    let bag="";
    for(let j=1; j<=4; j++){
        bag=bag+count+" "
        count++
    }
    console.log(bag)
}
/*
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
*/
let num = 343;

console.log("11"+1)
console.log("11"-1)

let number = 123456789;
let arr = number.toString().split("").map(Number)
console.log(arr)

let array = [1,2,4,5,6,7]
let str = Number(array.join(""))
console.log(str)
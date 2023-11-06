
// let x=15;

// let count=0;
// for(let i=1; i<=x; i++){
//     if(x%i==0){
//         count++
//     }
// }

// if(count==2){
//     console.log({Yes:"This is prime"})
// }else{
//     console.log({No:"This is the not prime number"})
// }

function isPrime(num){
    if(num<=1) return false
    for(let i=2; i<num; i++){
        if(num%i==0){
            return false;
        }
    }
    return true
}


let x=isPrime(3)
console.log(x)
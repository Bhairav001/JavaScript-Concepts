let arr =[2,5,2,6,4,9,5];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i]
    }else if(arr[i]>secondLargest){
        secondLargest=arr[i]
    }
}
console.log(secondLargest)
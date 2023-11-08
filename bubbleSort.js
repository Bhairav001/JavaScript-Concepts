let arr = [3,5,2,5,2,3,5,8,6,3]

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            swap(arr,j,j+1)
        }
    }
}
console.log(arr)
function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let newArr = [4,2,5,72,3,7,8,3]

newArr.sort((a,b)=>{
    if(a>b) return 1
    if(a<b) return -1
    return 0
})

console.log(newArr)
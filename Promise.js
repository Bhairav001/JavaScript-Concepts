let newPromise = new Promise((resolve,reject)=>{
      resolve("Success")
})

newPromise.then((res)=>{
    console.log(res)
})
newPromise.catch((err)=>{
    console.log(err)
})

//they are after run asynchrounous programming
//three state
//1. pending, fullfilled, reject
//avoid callback hell
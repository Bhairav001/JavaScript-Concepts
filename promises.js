const myPromise = new Promise((resolve,reject)=>{
    resolve("Success")
})


myPromise.then((res)=>{
    // do something promise is resolve
})

myPromise.catch((err)=>{
    console.log(err)
})

//promises has three stages
 //1. resolve [success]
 //2. reject [failed]
 //3. pending [processing]

 const newPromise = new Promise(function(resolve,reject){
     resolve("successkkhk")
 }).then(function(res){console.log(res)})
 .catch(function(err){console.log(err)})
 .finally(function(done){console.log(done)})
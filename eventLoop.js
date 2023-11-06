/*

is has to be has to be

2-5min answer to this

explain how js is syncrounus languge
but handle asyncronous behevour
why becouse its browser base 


1. call stack
2. heap memory
3. web api
4. blocking code
5. overflow the stack


when syncronous code happening it gose to the call stack
it excuted
whenever find asycrounous, timer and call back
web api handle


once network request ready 
push task queure

[if the call stack empty, start push not pushing element]


excution stack                               web apis
[global excution stack]
                                                setTimeout, DOM, AJAX/API,CALLS
  fun1()
  console.log("fun1 is starting") o/p - vanished
  fun2() excution context

         
                                                
                                    event loop            message queue 
                                                




*/
const fun2=()=>{
    console.log("fun2 is starting")
    setTimeout(()=>{
        console.log("fun2 is ending")
    },2000)
}

const fun1 =()=>{
    console.log("fun1 is starting")
     fun2()
     console.log("fun1 is ending")
}






fun1()





function name2(){
    setTimeout(()=>{
        console.log("name2 is starting")
    },2000)
}
function name1(){
    console.log("name1 is starting")
    name2()
    console.log("name1 is ending")
}

name1()
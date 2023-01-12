// let p=new Promise((resolve,reject)=>{
//     let a=5
//     if(a==2){
//         resolve("Success")
//     }
//     else{
//         reject("Failed")
//     }
// })
// p.then((message)=>{
//     console.log("This is in then "+message)

// })
// .catch((message)=>{
//     console.log("This is in catch "+message)
// })

const record1=new Promise((resolve)=>{
    resolve('video 1 recorded')
})
const record2=new Promise((resolve,reject)=>{
    resolve('video 1 recorded')
})
const record3=new Promise((resolve,reject)=>{
    resolve('video 1 recorded')
})
Promise.race([//use .all for returning after completion of all the promises
    record1,
    record2,
    record3]).then((message)=>{
        console.log(message)
})






function makeReq(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}` )
        if(location==='Google'){
            resolve("Google says Hi")
        }
        else{
            reject("We can only talk to google.")
        }
    })
}

function processReq(response){
    return new Promise((resolve,reject)=>{
        console.log("Processing response")
        resolve(`Extra information+ ${response}`)
    })
}
async function doWork(){
    const response=await makeReq('Google')
    console.log("response recieved")
    const processedResponse=await processReq(response)
    console.log(processedResponse)
}
doWork()
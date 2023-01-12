//for loop
var sum=0
for(let i=1;i<=500;i++){
    sum+=i
}
console.log(sum)

//for in loop
let obj={
    hary:20,
    geeta:30,
    sam: 45,
    vish: 67,
    niyu:80

}
for(let a in obj){
    console.log("marks of "+a+" is "+obj[a])
}

//for of loop
for(let a of "shree"){
    console.log(a)
}

//while loop

let i=0
while(i<10){
    console.log(i+1)
    i++

}

//do while
do{
    console.log("hello")

}while(0>3)

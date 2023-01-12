const arr=[5,1,3,2,6]

function isOdd(x){
    return x%2
}
const output=arr.filter(isOdd);
console.log(output)

//even



const output1=arr.filter(function isEven(x){
    return x%2==0
});
console.log(output1)

//greater than 3

const gt3=arr.filter(x=>{
    return x>3
})
console.log(gt3)




const arr=[5,1,3,2,6]

const output=arr.reduce(function (acc,curr){
    acc+=curr
    return acc
},0)

console.log(output)


const maxi=arr.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr
    }
    return acc

},)
console.log(maxi)

//to output how many people are there of same age

const user = [
    { firstName: "abhi", lastName: "singh", age: 32 },
    { firstName: "avy", lastName: "k", age: 21 },
    { firstName: "John", lastName: "Doe", age: 32 },
    { firstName: "akira", lastName: "Dave", age: 38 }

]
const ages=user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age]

    }
    else{
        acc[curr.age]=1
    }
    return acc


},{})
console.log(ages)
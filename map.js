var arr = [2, 4, 6, 8]
function double(x) {
    return x * 2
}
const doubled_Arr = arr.map(double)

console.log(doubled_Arr)
//binary


const binary_Arr = arr.map(function binary(x) {
    return x.toString(2)
})


console.log(binary_Arr)
//use map to print the full name


const fname=user.map((name1)=>name1.firstName+" "+name1.lastName)
console.log(fname)




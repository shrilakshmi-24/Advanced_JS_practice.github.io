var country=new Array("India","China","Japan","Russia","Newzeeland", "Nepal")
var a=["a","b","c"]
console.log(country.length)//length
console.log(country[0])
country[1]="Srilanka"
console.log(country)
country.pop()//pop
console.log(country)
country.unshift("Ukrane")//unshift
console.log(country)
country.shift()//shift
console.log(country)
console.log(country.indexOf("India"))//indexOf
console.log(country.indexOf("China"))//-1
console.log(Array.from("shrilakshmi"))

var res=[2,4,6,8].every((e)=>e%2==0)
console.log(res)
var arr=[2,3,4,5,6]
console.log(arr.fill(0))//fill
console.log(arr.fill(3,3))//fill
const result=[2,4,60,5,3].filter((num)=>num%2==0)//filter
console.log(result)
console.log(country. slice(2,5))//slice from index 2 to 5(5 excluded)
console.log(country.slice(1))//slice with only starting index
console.log(country)
country.splice(4,1,"Thailand")//splice changes original array
console.log(country)
delete(country[2])//delete
console.log(country)
console.log(country.length)
let s=country.concat(a,a)//concat  does not change original array
console.log(s)
console.log(country.sort())//sort changes original array

 
let compare=(a,b)=>{
    return a-b//returning positive value the ASC
}
console.log(arr.sort(compare))
console.log(country.reverse())
country.forEach((element)=>{//for Each
    console.log(element.toUpperCase())

})
console.log(country)
let name1="hello"
console.log(Array.from(name1))


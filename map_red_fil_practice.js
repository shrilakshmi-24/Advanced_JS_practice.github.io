//sum of positive numbers
let arr=[1,-20,39,-70,60,-35]
let newArr=arr.filter(x=>x>0)
console.log(newArr.reduce((acc,sum)=>sum+=acc))

//mean

let mean=(arr.reduce((acc,sum)=>sum+=acc))
console.log(Math.round(mean/arr.length))


//Get name initials
let name1="George Raymond Richard Martin"
name2=name1.split(" ")
let initials=name2.map((x)=>x[0])

console.log(initials.join(""))

//Age difference from the youngest and oldest
const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jeniffer",
      age: 65,
    },
  ];
  let ages=input.map((person)=>person.age)
  let diff=Math.max(...ages)-Math.min(...ages)
  console.log(diff)

//factorial of number using map reduce
const num=6
let fact_arr=new Array(num).fill(0)
fact_arr.map(function (currentValue, index) {
    return index + 1;
  })
  console.log(fact_arr)



  //number of their occurrences.
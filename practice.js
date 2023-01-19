 //reduce
let arr1=[1,2,3,4,5,6,7,8]
let res=arr1.reduce(concatination)
function concatination(prev,cur){
    return prev*10+cur
} 
console.log(res)


//2 reduce
 
 var arr = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];

 let group = arr.reduce((acc, cur) => {
    if (!acc[cur.voted]) {
      acc[cur.voted] = [];
      acc[cur.voted].push(cur);
    } else {

      acc[cur.voted].push(cur);
    }
    return acc;
  }, {});
  console.log(group[true].length)


  //3 reduce total price
  var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let price=wishlist.reduce((prev,cur)=>{
   return cur.price+prev
},0)

console.log(price)

//4
let grouped=arr.reduce(age_group,{})
function age_group(prev,cur){
    // age1=cur.age
    if(prev[cur.age]==null){
        prev[cur.age]=[]
    }
    prev[cur.age].push(cur)
    return prev
}
console.log(grouped)

let county=0
let countm=0
let counto=0
let voters=arr.reduce(voting,{})

function voting(prev,cur){
   
    if(cur.age>18 && cur.age<30){
        county++
    }

    else if(cur.age>30 && cur.age<60){
        countm++
    }
    else{
        counto++
    }
    prev["young"]=county
    prev["Mids"]=county
    prev["Old"]=county
    return prev
}
console.log(voters)
console.log(String(1234))
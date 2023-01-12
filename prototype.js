let object={
    name:"shree",
    place:"karkala",
    getIntro:function(){
        console.log(this.name+" from "+this.place)
    }
}

let object1={
    name:"shri",
   
}

//prototyp
object1.__proto__=object

console.log(object1.name)
console.log(object1.place)
object1.getIntro()

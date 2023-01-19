let obj={
    name:"shrilakshmi",
    place:"Karkala"

}
let obj2={
    name:"siya",
    place:"mumbai"
}

myIntro=function(state,country){
    console.log(this.name+" from "+this.place+" , "+state+" , "+country)
}

myIntro.call(obj,"Karnataka","India")
myIntro.apply(obj2,["Maharashtra","India"])
let binded=myIntro.bind(obj,"Goa","India")
console.log(binded)//returns function
binded()
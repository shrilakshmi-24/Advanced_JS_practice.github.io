//function statement or declaration
function avg(x,y){
    return (x+y)/2
}
//function expression
var b=function(){
    console.log("function expreaaion")
}
//named function expression
var c=function xyz(){
    console.log("xyz")
}
avg(20,30)
b()
c()
//xyz()//error

function Car(name1,speed){
    this.name1=name1
    this.speed=speed
}
car1=new Car('maruti',180);
car2=new Car('aulto',300)
console.log(car1)





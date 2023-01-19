//using bind

function multiply(x,y){
    console.log(x*y)

}
let mulby2=multiply.bind(this ,2);
mulby2(3);


//using closures

let mult=function(x){
    return function(y){
        console.log(x*y)
    }
}
let mul3=mult(2)
mul3(8)
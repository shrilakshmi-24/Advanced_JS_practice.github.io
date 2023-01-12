class employee{
    constructor(){
        console.log("constructor employee")
    }
}

class manager extends employee{
    constructor(name){
        console.log("manager class")
    }
    
}
let a=new manager()
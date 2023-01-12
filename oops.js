class hello{
    constructor(name){
        this.Name=name
        console.log("Constructor")
    }
    Message(){
        console.log("Hello !"+this.Name)
    }
}


let a=new hello("shree")


a.Message()
var user={
    f_name:"shrilakshmi",
    age:22,
    role:"intern",
    mob:9876543210,
    interests:["sing"],
    interest: function(){
        this.interests.push("dance")
        // console.log(this.length)
    },
    desc:function(){
        return `${this.f_name} is ${this.age} year old`

    }
}

user.interest()
console.log(user.mob)
console.log(user["age"])
console.log(user.f_name="shree")
console.table(user)

console.log(user.desc())





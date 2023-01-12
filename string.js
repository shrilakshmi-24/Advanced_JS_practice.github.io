var name1="shrilakshmi"
var name2='SHENOY'

console.log(name1[5])
console.log("priya \'s pencil".length)
//template literals

let full_name=`my full name is ${name1} ${name2}`
console.log(full_name)

//methods

console.log(name1.length)//length
console.log(name1.toUpperCase())//upper case
console.log(name1)
console.log(name2.toLowerCase())//lowercase
console.log(name1.slice(0,4))//slice
console.log("Hi ".concat(name1))//conacat
newString=name1+name2.replace("SHENOY"," kedinje")
console.log(newString)
console.log("            HELLO     ".trim())
//STRINGS ARE IMMUTABLE
console.log(name1.indexOf('s'))//index of
console.log(name1.replace("shri","shree"))//replace first 
console.log(name1.replaceAll("sh","xx"))//replaces all the occurances
console.log(name1.substring(0,4))//substring from specified index
console.log(name1.charAt(0))//charAt
console.log(name1.split(""))//split

const arr = Array(2, 4, 6);
console.log(arr)

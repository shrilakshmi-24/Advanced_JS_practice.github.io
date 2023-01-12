// console.log("Namaste!")


// setTimeout(function(){
//     console.log("Look here")
// },5000)

// console.log("I am here!")


const cart=["shoes","kurtha"]
api.createOrder(cart,function(){
    api.proceedToPayment(function(){api.showOrderSummary()})
})

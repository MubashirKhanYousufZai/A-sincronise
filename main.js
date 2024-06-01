"use strict";
//A-sincronose:
console.log("Welcome to our biryani shop.🍛");
function orderBiryani(prepapreCB) {
    console.log("Placing your order...");
    setTimeout(() => {
        console.log("Your order has been confirmed.");
        prepapreCB();
    }, 3000);
}
function preparingBiryani() {
    console.log("Your order is preparing🍛...");
    setTimeout(() => {
        console.log("Your order is prepapred🍛.");
    }, 4000);
}
orderBiryani(preparingBiryani);
setTimeout(() => {
    function delivery() {
        console.log("Your order is picked by our rider...");
        setTimeout(() => {
            console.log("Our rider is reached at your Address.");
            console.log("Enjoy your meal ☺");
        }, 3000);
    }
    delivery();
}, 10000);

// ***************Imeediately Invoked Fuction Expressions(IIFE)*****************


// function gretting(){
//     console.log(`welcome to our website`)
// }
// gretting()   n // normally we declear the function

// +++++++++++ function declear with IIFE +++++++++++++

(function gretting(){         //named IIEF
    console.log(`welcome to our website`)
})();   // here we close the sqaure paranthesis then it work like IIFE this
// is mainly used for the protect the global scope polution


// ++++++ IIFE also work with arrow function+++++++++++++

(()=>{
    console.log("welcome to my world")
})()
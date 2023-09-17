//*********************** IF ******************************************

let age=20

if(age>=21){
    console.log("you adult")
}
else{
    console.log("you not adult")
}


// understanding of scope

let score=200

if(score>100){
    let power="change the name of India"
    // var power="change the name of India"    // this is work but not prefer to use

    console.log(`powwer of PM:${power}`)
}
// console.log(`powwer of PM:${power}`)


//+++++++++++++++ nested if ++++++++++++++++++++++++++++

let marks=500

if(marks<300){
    console.log("pass")
}
else if(marks>=500){
    console.log("topper")
}
else if(marks<200){
    console.log("fail")
}
else{
    console.log("Re-Attempt")
}


//  +++++++++++++++++++++ and(&&)   or(||) +++++++++++++++++++
let userLoggedIn=true
let userPhoneNo=true
let userUPI=true

const userLoggedInFromEmail=true
const userLoggedInFromGoggle=false

if(userLoggedIn && userPhoneNo && userUPI){
    console.log("you continue the shoping")
}
if(userLoggedInFromEmail || userLoggedInFromGoggle){
    console.log("you can go to the website")
}

//+++++++++++++++++++++++ Switch Statement +++++++++++++++++++++++

let month=4

switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("june")
        break;

    default:
        console.log("default match")
        break;
}



// ++++++++++++++++++++ falsy and Truthy Value +++++++++++++++++++++++
const validUser=[]
if(validUser){
    console.log("verified User")
}
else{
    console.log("not valid user")
}


// ******* flasy value *******:
// flase,0,-0,BigInt on,null,undefined,NaN

//******** Truthy Value *******:
// "0","flase"," ",[],{},function(){}

if(validUser.length===0){               // for checking empty array
    console.log("empty array")
}


const emptyObj={}

if(Object.keys(emptyObj).length===0){      // for checking empty object
    console.log("empty object")
}

//Nullish Coalescing Operator(??): null undefined

let val1=5 ?? 10
// let val2=null ?? 20
let val3=undefined ?? 15
let val4 =null ?? 10 ?? 15

console.log(val4)


// ++++++++++++++ Tenary Operators ++++++++++++

// condition ?true:flase

const coursePrice=500
coursePrice<=500 ? console.log("I afford"):console.log("not afford")
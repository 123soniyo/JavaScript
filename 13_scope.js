// let a=39
// const b=40
// var c=90     //not prefer to use var

let a=50   //global scope


if(true){
    let a=39          //block scope
    const b=40
    var c=90
    
}
// console.log(a)
// console.log(b)           
// console.log(c)



function one(){
    username="shruti"

    function two(){
        empId=11192677
        // console.log(username)       //child function has rights to acces the parent function
    }
    // console.log(empId)    //get error bcz function two is subfuction of one so two only accessable within the scope or within the two fiunctio
    two()
}
one()



if(true){
    username="vivek"
    if(username=="vivek"){
        const id=111962677
        // console.log(username , id)
    }
    // console.log(username)
}




// ++++++++
console.log(addOne(5))
function addOne(num){
    return num+1
}
// addOne(5)


// console.log(addTwo(6))          //error
const addTwo=function(num){
    return num+2
}

addTwo(6)
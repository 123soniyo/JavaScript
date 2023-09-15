const user={
    username:"shruti",
    empId:1192677,

    welcomeMessage:function(){
        console.log( `${this.username}  ,welcome to website`)
        // console.log(this)    // this keyword refer to the current context
    }
    
}
// user.welcomeMessage()
// user.username="vivek" 
// user.welcomeMessage()

// console.log(this)



function thisDemo(){
    let username="shruti"
    // console.log(this.username)    // this keyword is not work with function
}
thisDemo()



// const arrowDemo= function(){
//     let userName="shruti"
//     console.log(this.userName)
// }
// arrowDemo()

const arrowDemo= () => {
    let username1="shruti"
    // console.log(this.userName1)
    // console.log(this)
}
arrowDemo()



//Arrow Function


// const studentInfo=(studentName1,phoneNo) =>
// {
//    return studentName1+phoneNo         //explicitie
// }
// console.log(studentInfo("shruti ",894564756))


// implicite return 
// const addtwo=(num1,num2)=> num1+num2
// const addtwo=(num1,num2)=> (num1+num2)
// console.log(addtwo(7,3))

const addtwo=(num1,num2)=> ({username:"shruti"})   //object with arrow funtion
console.log(addtwo(4,5))




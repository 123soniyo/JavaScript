// sigletone

// ******object literals***********

const mySym=Symbol("key1")
// console.log(typeof mySym)

const jsUser = {
    name: "shruti",
    age:23,
    "emp Id":11192677,
    [mySym]:"key1",       //adding the symbol in object withe the help of []
    location:"sitamarhi",
    email:"shruti@facebook.com",
    isLoggedIn:false

}
// console.log(jsUser.name)
// console.log(jsUser.emp Id)    //error
// console.log(jsUser["empId"])
// console.log(jsUser[mySym])

jsUser.email="shruti@goggle.com"
// Object.freeze(jsUser)            // after assign the freeze method we can't change anything

jsUser.email="shruti@microsoft.com"
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("hello js user")
}
// console.log(jsUser.greeting())

jsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`)
}
// console.log(jsUser.greeting2())


// creating object using constructor

const backendUser=new Object()   //// singleton object
const backendUser1={}  //// non-singleton object
// console.log(backendUser)
// console.log(backendUser1)

backendUser.name="shruti"
backendUser.id=11192677
backendUser.isLoggedIn=true
// console.log(backendUser)


const backendUserDetails={
    email:"abc@gmail.com",
    userName:{
        userFamilyName:{
            firstName:"shruti",
            lastName:"mahto"
        }
    }
}

// console.log(backendUserDetails.userName.userFamilyName.firstName)


const obj1={name:"shruti",Id: 111192677}
const obj2={name1:"vivek",Id1: 111192695}
// console.log(obj1,obj2)
const obj3 = Object.assign({},obj1, obj2)   // we use assign to concat the object
// console.log(obj3)


//spread
const obj4={...obj1 ,...obj2}
// console.log(obj4)



// console.log(jsUser)
// console.log(Object.keys(jsUser))
// console.log(Object.values(jsUser))
// console.log(Object.entries(jsUser))
// console.log(jsUser.hasOwnProperty("locati"))




const userInfo=[
    {
        id:1,
         email:"sh@gmail.com"
    },
    {
        id1:2,
         email1:"shr@gmail.com"
    },

    {
        id2:3,
         email2:"shru@gmail.com"
    }


]

userInfo[1].email1






const skills={
    langauge:"javascript",
    database:"sql"


}
// console.log(skills.langauge)  
const{database:db}=skills        //another way to represent the value or de-structuring
console.log(db)
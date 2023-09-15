function myFriendList(){
    console.log("shruti")
    console.log("vivek")
    console.log("saloni")
    console.log("rajani")
    console.log("priya")
}
// myFriendList()

//add two number
// function addTwoN(n1,n2){   //parameters
//    console.log(n1+n2)
// }
// addTwoN(4,5)         //arguments

function addTwoN(n1,n2){   //parameters
    // let result=n1+n2
    // return result


    return n1+n2
 }
//  console.log(addTwoN(5,5))
let total=addTwoN(2,3)
// console.log(total)




function loginUserMessage(username){
    if(username===undefined)
    {
       console.log("please enter a username")
       return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("shruti"))
// console.log(loginUserMessage())



function addToCart(val1,val2,...item)       //rest operator means u can add mulitiple item whatever u want
{
  return item
}
// console.log(addToCart("shampoo","shop","brush","serum"))



const user={
    username:"shruti",
    price:12929
}

function handleObject(anyObject)
{
//   console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`)

}
// handleObject(user)
handleObject({
    username:"kajal",
    price:292


})


const myNewArr=[42,85,23,45,65]
function returnSecondEle(getArr){
return getArr[1]
}

console.log(returnSecondEle(myNewArr))
const language=["python","java","java Script","c++"]

const lang=language.forEach((item)=>{
    // console.log(item)
    return item
})
// console.log(lang)          // for each not return the value


// ++++++++ Filter ++++++++


const myNum=[1,2,3,4,5,6,7]

// const disMyNum=myNum.filter((item)=> item>4)
// console.log(disMyNum)


// const disMyNum=myNum.filter((item)=>{
//     return item>4
// })
// console.log(disMyNum)





// for each
const newNum=[]
myNum.forEach((item)=>{
    if(item>4){
        newNum.push(item)
    }
})
// console.log(newNum)





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//   let userBooks=books.filter((bk)=> bk.genre==="History" )
let userBooks=books.filter((bk)=> 
{
    return bk.genre==="History" && bk.publish<='2000'})

//   console.log(userBooks)
  

  // ++++++ Map +++++++
  let myNums=[1,2,3,4,5,6,7,8,9]

//   let result=myNums.map((num)=>num+2)
//   console.log(result)



  // +++++++++ chain +++++++++++
//   let result=myNums
//                                .map((num)=>num*10)
//                                .map((num)=>num+1)
//                                .filter((num)=> num>=15)
//   console.log(result)



  // ++++++++++ reduce ++++++++++++++++
  const mynum=[1,2,3]
  let myResult=mynum.reduce((acc,currVal)=>{
    console.log(`acc: ${acc} and currVal:${currVal} `)
    return acc+currVal

  },0)
  console.log(myResult)








  const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
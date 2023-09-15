// Array

const myArr=[1,2,3,4,5,6]
const myFriend=["priya","priyanshu"]
const final=new Array(myArr,myFriend)
console.log(final)

// console.log(`let's concat the number${myArr} and there Name${myFriend}`)
const myArr2=new Array(1,2,3,4,"shruti")
// console.log(myArr2)
// console.log(myArr[2])

// console.log(myArr.push(7))
// console.log(myArr.pop())
// console.log(myArr)

// console.log(myArr.unshift(8))
// console.log(myArr)

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(5))

const newArr= myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


// slice and splice

// const myn=new Array("A ", newArr)
// console.log(myn)

const myn1=myArr.slice(1,3)
// console.log(myn1)
// console.log("B ",myArr)

const myn2=myArr.splice(1,3)
// console.log(myn2)
// console.log("C ",myArr)



const empName=["shruti","vivek","priya","saloni"]
const empId=[11192677,11192695,11192676,11192690,11192678]

// empName.push(empId)
// console.log(empName[4][2])

const allData=empName.concat(empId)
// console.log(allData)


//spread
const all_emp_info=[...empName,...empId]
// console.log(all_emp_info)

const another_array=[1,2,3,4,[5,6],8,9,5,[9,6]]

const useable_another_arr=another_array.flat(Infinity)
// console.log(useable_another_arr)


// console.log(Array.isArray("shruti"))
// console.log(Array.from("shruti"))

let score1=100
let score2=200
let score3=300

// console.log(Array.of(score1,score2,score3))
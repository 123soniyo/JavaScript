// ********************** for of ********************************
let arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
    
}

let gretting="welcome to my world"
for (const greet of gretting) {
    if(greet==" "){
        break
    }
    // console.log(greet)
    
}


// +++++ map ++++++++
const map= new Map()

map.set("In" ,"India")
map.set("US","united state of America")
map.set("fr","france")
// map.set("In" ,"India")                 // duplicate value not consider

// console.log(map)

for (const [key,value] of map) {
    // console.log(key, "=>",value)
    
}


// let myObject={
//     name:"shruti",
//     id:11192677
// }

// for (const [key,value] of myObject) {
//     console.log(key, "=>",value)           // this is not iteritable with object
    
// }


// +++++++++ for in ++++++++
const myObject={
    py:"python",
    js:"java script",
    cpp:"c++",
    rb:"ruby"
}

for (const key in myObject) {
    // console.log(`${key} sortcut of ${myObject[key]}`)
        
    }


// ++++++++++++ for each ++++++++++++++++++++++
let language=['java','python','java script','c++']

// language.forEach(function (item)
{
        // console.log(item);
}


// language.forEach( (item)=>{
//     console.log(item)
// })
// language.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// })






let myArr=[
    {
        empName:"shruti",
        empId:11192677
    },
    {
        empName:"vivek",
        empId:11192695
    },
    {
        empName:"priya",
        empId:11192676    }
]

myArr.forEach((item,index)=>{
    console.log(item.empId,index)  

})

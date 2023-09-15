// type of data_type
// ********1.primitive(call by value)**************

let stringNum="shruti"
let numberDefine=10.5
let id=11192677
let isbollean=true
let oustsidetemp=null
let userEmail;

const EMP_id=Symbol("123")
const anotherId=Symbol("123")

console.log(EMP_id==anotherId)


//***********************Non primitive(Reference) **********/
// Array,Object,Fuction

const emp_name=["shruti","vivek","priya"]
let myobj={
    name:"shruti",
    id1:11192677
}

const myfuction=function(){
    console.log("hello world");
}
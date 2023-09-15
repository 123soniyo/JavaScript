// stack(primitive)  heap(non-primitive)

let my_name="shruti"
let family_name=my_name
family_name="kajal"

console.log(family_name)
console.log(my_name)

let userOne={
    email:"shruti@facebook.com",
    upi:"shruti@paytam"

}
let userInfo=userOne
userInfo.email="priya@gmail.com"

console.log(userOne.email)
console.log(userInfo.email)
console.log(typeof`shruti`)
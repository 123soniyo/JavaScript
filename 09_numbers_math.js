//++++++++++++++Numbers++++++++++++++++++++

let balance=400
console.log(balance)
const totalBalance=new Number(100000)

console.log(totalBalance)
console.log(totalBalance.toString().length)
console.log(totalBalance.toFixed(2))

const otherBalance=48.45587
console.log(otherBalance.toFixed(2))

console.log(otherBalance.toPrecision(3))
console.log(totalBalance.toLocaleString('en-IN'))
console.log(Math)
console.log(Math.abs(-50))
console.log(Math.round(8.9))
console.log(Math.ceil(4.5))
console.log(Math.floor(5.8))
console.log(Math.sqrt(25))
console.log(Math.min(7,8,9,6,5))
console.log(Math.max(8,2,3,59))

console.log(Math.random())
console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
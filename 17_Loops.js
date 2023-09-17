// **************** For Loop *******************

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }


for (let i = 1; i <=5; i++) {
    // console.log(`outer loop:${i}`)
    for (let j = 1; j <=5; j++) {
    //    console.log(`inner loop: ${j}`)
    // console.log(i + '*' +  j +'=' +i*j );
        
    }
    
}


// loop with array

let myArr=["shruti","vivek","priya"]

for (let index = 0; index <myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)
}


// +++++++++++++++ Break and Continue ++++++++++++++++++++++++++++
// for (let i = 1; i <=10; i++) {
//    console.log(`value of i is ${i}`)
//    if(i==5){
//     console.log("detected 5")
//     break;
//    }
    
// }

for (let i = 1; i <=10; i++) {
//    console.log(`value of i is ${i}`)
   if(i==5){
    // console.log("detected 5")
    continue;
   }
    
}





// ++++++++++++++ While Loop +++++++++++++++++++++++
// let i=0
// while (i<=10) {
//     console.log(i)
//     i=i+1
    
// }
let i=1
while (i<=5) {
   
    console.log(i)
    i=i+1
    
    
}


// ++++++++++++++++ Do While ++++++++++
let score=11
do {
    console.log(`score is ${score}`)
    score=score+1
    
} while (score<=10);




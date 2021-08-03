// today we learn js argument object alternative way 
// ekhane alternative way te amra 'rest operator' use koresy akhon amra jotoi augument pass kori na keno kono somossa nei and argument parameter hisab korar o kono dorkar nai .akon jotoi argument hok na keno sob argument ai rest value parameter hisebe accpt korbe r prothom parameter num1 aita amader dite hobe and return er sese abar oi num1 k call korte hobe karon ai num1 thekei initialization start hobe.ai num1 na dile first argument 20 run hobe na

// function arr (num1, ...restvalue){
//     return restvalue.reduce(function(acc,curr){
//             return acc + curr
//     },num1) 


// }
// console.log(arr(20,30,40,40))


// amra jodi chai ai num1 use korbo na shudu rest operator use korbo tao amader kaj ta hoye jabe.


// function arr(...restvalue) {
//     return restvalue.reduce(function(acc, curr) {
//         return acc + curr
//     })


// }
// console.log(arr(20, 30, 40, 40))

// function alternative (num1,...restvalue){
//     return restvalue.reduce(function(acc,cur){
//         return acc + cur
//     }, num1)
// }
// console.log(alternative(20,30,40))


// function alternative (...restvalue){
//     return restvalue.reduce(function(acc,cur){
//         return acc + cur
//     })
// }
// console.log(alternative(20,30,40))
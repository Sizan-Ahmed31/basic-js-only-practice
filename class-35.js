// today we learn what is higher order function and what is call back fuction.
// 1.higher order fuction holo j function onno akta function k return kore othoba j function onno akta function k parameter hisabe recieve kore tai holo higher order fuction.

// 2.j function return hoi othoba j function receive hoi take bola hoi call back function. details jante video er ses er dike dekho





// first class fucnction
// first class fucnction as variable er data hisabe

// const func = function(){
//     console.log('fuction as data');
// };
// func();

// first class fucnction as function er under e another function hisabe 

// function outer() {
//   return function inner() {
//       console.log('function as return');

//   }    
// }
// outer()();

// first class fucnction as function er argument hisabe.

// function outerFunc(receive) {
//     console.log(receive());
// }
// outerFunc(
//     function innerFunc() {
//         console.log('function as argument');
//     }
// );


// const func = function name(params) {
//     console.log('function')

// }
// func();

// function outer() {
//     return function inner() {
//         console.log('fuu')

//     }
// }
// outer()()

// function outerFunc(argument) {
//     console.log(argument())
// }
// outerFunc(
//     function argument() {
//         console.log('sizan')

//     }
// )


// another practice 
// function func (){
//     console.log('hello boys')
// }
// func ()

// function innerFunc (){
//    return function outerFunc(){
//         console.log('hello boys')
//     }
// } 
// innerFunc ()()

// function outer(parameter){
// console.log(parameter())
// }
// outer(function(){
//     console.log('hello world')
// })

// const func = function one (){
//     console.log('hello brother')
// }
// func()

// function func(){
//     return function one (){
//             console.log('hello brother')
//         }
// }
// func()()

function one(re) {
    console.log(re())
}

one(function() {
    console.log('hello brother')
})
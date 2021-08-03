// javascript array helper method.


// way of looping.
// simple (plain for loop).
// while loop. 
// for of loop (array recommended)
// for in loop (object)
// for each loop

// amra ai array helper method use korbo array er moddhe tai aita k bola hoi array helper method .ajk amra shikbo map method .ai method gula khub important. 
// array helper method 
// map 
// filter 
// find 
// every 
// some 
// reduce

// amra jemon for loop,for of loop ,for in , for each loop jemon kaj kore thik temon e map method o kaj kore 

// what do the map method :
// 1.works like regular looping.
// 2.work with Array.
// 3.return a new Array(with modified or without modified element)
// 4. don't change the original array

// map method er structure ta akdom forEach loop er moto

// const arr = ['i','love','programming'];
// const sizan = arr.map(function (el) {
//     return el.toUpperCase()
// }

// )
// console.log(sizan);




// arrow use kore shortcut
// const arr = ['i', 'love', 'programming'];
// const sizan = arr.map((el) => el


// )
// console.log(sizan);


// class-48 homework to add ! mark in ['i', 'love', 'programming']

// const arr = ['i', 'love', 'programming'];
// const sizan = arr.map(el => {
//     if (el === 'programming') {
//         return el + '!'
//     } else {
//         return el;
//     }
// })


// console.log(sizan)

// const sizan = arr.map(function(el) {
//     if (el === 'programming') {
//         return el + '!'
//     } else {
//         return el;
//     }

// })
// console.log(sizan)

// const arr = ['i', 'love', 'programming'];
// const mapMethod = arr.filter(function (params) {
//   if(params.includes ){
//       return params
//   }
    
// })
// console.log(mapMethod)

// const arr = ['i','love','programming'];
// const mapArr = arr.map ((el) => el
// )
// console.log(mapArr)

// const arr = ['i','love','programming'];
// const arrObj = arr.map ((el) => el
// );
// console.log(arrObj)

const arr = ['i','love','programming'];
const mapArr = arr.map(function(el){
  if (el === 'programming'){
    return el + '!'
  }else{
    return el
  }
})
console.log(mapArr)
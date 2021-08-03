// ajk amra shikbo array er reduce method
// reduce method element k reduce kore combined kore akta result amder k return kore.
// const arr = ['i', 'love', 'programming' ];
// ekhane accumulator,currentValue ai 2ta argument amra recieve koresy r reduce er somoy 2ta argument recieve korte hoi.

// const reduceValue = arr.reduce ((accumulator,currentValue) =>
//  {return `${accumulator} ${currentValue}`})

//  1st time jokhon looping hosse tokhon 
// accumulator        currentValue
//     i                   love

// 2nd time jokhon looping hosse tokhon 
// accumulator        currentValue
//   i love            programming

// console.log(reduceValue);

// aivabe jokhon bar bar looop hobe tokhon ager loop kora element accumulator e joma thakbe r porobortite loop er somoy current value join hobe. 





// class-53 exam on reduce method 



const nums = [10, 20, 30];
const reduceArr = nums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
})
console.log(reduceArr)


// function sum (){
//      const arr = [...arguments]
//      const total = arr.reduce(function(acc,curr){
//         return acc+curr
//      })
       
//         return total       
// }
// console.log (sum(30,40,50,50));


// const arr = ['i', 'love', 'programming' ];
// const reduceArr = arr.reduce(function(acc,para){
//    return `${acc} ${para}`
// })
// console.log(reduceArr)


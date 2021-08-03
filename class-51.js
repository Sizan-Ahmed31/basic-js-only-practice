// class on every and some method 

// what do the every method :
// 1.works like regular looping.
// 2.work with Array.
// 3.return true or false (work based on condition)
// 4. don't change the original array

// every method er somoy jodi array er sob element condition k satisfy korte hobe orthat condition e set kora sob element jodi true hoi tahole result o true hobe r jodi akta element false hoi tahole result false hoye jabe.
const arr = ['i', 'love', 'programming'];
const everyArr = arr.every(function(el) {
    return typeof el === 'string' ? el : '';
    // if (typeof el === 'string') {
    //     return el
    // }

})
console.log(everyArr)


// ekhane amra ternery operator use koresy 
// const arr = ['i', 'love', 'programming', ];
// const everyArr = arr.every (params => { 
//     return typeof params === 'string' 


// })
// console.log(everyArr);
// ekhane amra sob string element use koresy orthat sob element true ja condition k satisfy korese tai result o true kintu aikhane jodi ami akta number use kori tahole result false hobe.


// now we learn some method 
// some method every method er opposite mane some er somoy j kono akta  element condition k satisfy korlei result true hobe sob element true na holeo cholbe

// some method structure by ternary operator 
// const arr = ['i', 'love', 'programming' ];
// const someArr = arr.some (params => { 
//     return typeof params === 'string' 


// })
// console.log(someArr);
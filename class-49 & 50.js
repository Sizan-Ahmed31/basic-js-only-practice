// class on filter method and find method  


// what do the filter method :
// 1.works like regular looping.
// 2.work with Array.
// 3.return a new Array(work based on condition)
// 4. don't change the original array

// filter array map array er moto kaj kore kintu aikhane condition use korte hoi 
// const arr = ['i', 'love', 'programming'];
// const filterArr = arr.filter(el => el.length > 3 ? el : ''
//     if (el.length > 3) 
//         return el

    // ekhane amdr r else condition ta na use korleo cholbe karon amra if er somoy true result peye gesi.
    // aikhane amra ternary operater use kore condition k short koresy

// console.log(filterArr)


// now we learn find method 

// what do the find method :
// 1.works like regular looping.
// 2.work with Array.
// 3.return a single value/element (work based on condition)
// 4. don't change the original array

// find method er kaj onno method er motoi kintu find method akta single value return kore

// const arr = ['i', 'love', 'programming'];
// const findArr = arr.find(el => el.length > 3 ? el : ''

// )
// console.log(findArr);

// tahole amra dekhlam filter and find method aki kaj kore.shudu different hosse filter akta array return kore r find akta value return kore.


// class-50 home work ...by using 'filter array' we define a 'mm' attached word 

// const arr = ['i', 'love', 'programming'];
// const examFilter = arr.filter(function (params) {
//     if (params.includes('mm')){
//         return params
//     }

// })
// console.log(examFilter)


// using ternery operator

// const arr = ['i', 'love', 'programming'];
// const examFilter = arr.filter((params) => {
//     return params.includes('mm') ? params : ''
//         // if (params.includes('mm')){
//         //     return params
//         // }

// })
// console.log(examFilter)

// another practice 

// const arr = ['i', 'love', 'programming'];
// const filtrArr = arr.filter(function(el){
//     return el.includes('mm') ? el : '';
//     // if(el.includes('mm')){
//     //     return el
//     // }
// })
// console.log(filtrArr);


const arr = ['i', 'love', 'programming'];
const mapArr = arr.filter(function(el){
    if (el.includes('mm')){
        return el 
    }
})
console.log(mapArr)
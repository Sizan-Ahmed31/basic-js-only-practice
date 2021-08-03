// kivabe amra kisu shonkhar sum ber korte pari seita amra ai class e shikbo

// arr=[1,2,3,4];
//  const [index1,index2,index3,index4]=arr;
// let add=''; 

// function sum (){

//    add=(index1+index2+index3+index4);

// return add




// }
// const result =sum(add);
// console.log (result)


const arr = [1, 2, 3, 4];

function sum(parameter) {
    let sum = 0;
    if (!Array.isArray(arr)) return 'please provide array'
    for (let num of arr) {
        sum += num
    }
    return sum
}
console.log(sum(arr))

// const index = [1, 2, 3, 4];

// function sum(param) {
//     let sum = 0;
//     if (Array.isArray(param))
//         for (let num of param) {
//             sum += num
//         }
//     return sum

// }
// console.log(sum(param))
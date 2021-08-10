// today we learn switch statement. when we necessary a large number condition we use it inspite of if,else if ,else.

// const price = 70;
// let prize = true;
// let chocolate = true;
// switch (price) {
//     case 100:
//         prize = true;
//         chocolate = false;
//         break;
//     case 80:
//         prize = false;
//         chocolate = true;
//         break;
//     case 70:
//         prize = true;
//         chocolate = true;
//         break;
//     case 50:
//         prize = false;
//         chocolate = false;
//         break;
//     default:
//         prize = false;
//         chocolate = false;
// }
// console.log(prize)
// console.log(chocolate)

const price = 70;
let freeShipping = true;
let freeHand = true;
switch (price) {
    case price >= 100 && price:
        freeShipping = true;
        freeHand = false;
        break;
    case price >= 60 && price:
        freeShipping = false;
        freeHand = true;
        break;
    default:
        freeShipping = true;
        freeHand = true;
}

console.log(freeShipping)
console.log(freeHand)
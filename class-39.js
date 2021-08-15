// aikhane amra shikbo 'scope' scope er describe notebook a note koresi oikhan theke deko
// aikhane a = 10 holo global scope. ai scope k ami jekhene issa access korate pari. kintu baki jei variable gula ami {} function er moddhe note koresi seigula k bola hoi functional scope .ai functional scope k access korar jonno amader aktai rules seita hosse amra aita k oi {} function er moddei access korte parbo baire access korle error dekhabe.details bujhar jonno tutorial ta dekho.


// aikhane amra const use korte pari r jodi amra reassign korte chai tahole let use korte pari

// const a = 10;
// function outer() {
//     console.log(a);
//     let b = 5;
//     let c = 15;
//     let d = 30

//     return function inner() {
//         console.log(b);
//         c = 2
//         console.log(c);
//         const a = 50;
//         c = 4;

//         return function innerAgain() {
//             const a = 100
//             console.log(d);
//             console.log(a);
//             console.log(c);

//             return function innerAgain() {
//                 const a = 100
//                 console.log(d);
//                 console.log(a);
//                 console.log(c);
//             }
//         }


//     }
// }

// outer()()()()
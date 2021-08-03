// object desturcture example
// const person1 = {
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// };
// const person2 = {
//     myName: 'shorif',
//     age: 50,
//     job: 'student'
// };

// function bestMan({ myName, age, job }) {
//     // const { myName, age, job } = parameter

//     return `name-${myName} age-${age} job-${job}`;
// }
// const man1 = bestMan(person1);
// console.log(man1);
// const man2 = bestMan(person2);
// console.log(man2);

// array destructure example

const person1 = {
    myName: 'sizan',
    age: 20,
    job: 'student'
};
function man ({myName,age,job}){
   
    return `name-${myName} age-${age} job-${job}`
}
console.log(man (person1));

// array destructure
const product = ['potato',30,5];
const [productName,,quantity] = product;
console.log(productName,quantity)

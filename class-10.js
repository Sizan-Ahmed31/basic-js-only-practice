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

// function bestMan(parameter) {

//     return `name-${parameter.myName} age-${parameter.age} job-${parameter.job}`;
// }
// const man1 = bestMan(person1);
// console.log(man1);
// const man2 = bestMan(person2);
// console.log(man2);


const person1 = {
    myName: 'sizan',
    age: 20,
    job: 'student'
};
const person2 = {
    myName: 'lallu',
    age: 10,
    job: 'chawala'
};
const person3 = {
    myName: 'modon',
    age: 50,
    job: 'vanwala'
};
function man (parameter){
    return `name-${parameter.myName} age-${parameter.age} job-${parameter.job}`;
}
console.log(man (person1))
console.log(man (person2))
console.log(man (person3))

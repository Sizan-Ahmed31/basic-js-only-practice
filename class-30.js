// sprad operator and rest operator er moddehe difference ta ki.and kothai konta  bebohar hoi sei bisoy nea ai class hobe.

// const text1 = ['i', 'love', 'programming'];
// // amra akhn destructure korbo 
// const [x,y,z] = text1;
// console.log(x,y,z);


// array er rest value 
// akhon amara rest operator use korbo. 
// const text1 = ['i', 'love', 'programming'];
// //  rest value use korci
// const [x,...restValue] = text1;
// console.log(x,restValue);



// object er rest value 
// const person1 = {
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// };
// // prothome amra destructure korbo
// const {myName,age,job} = person1
// console.log(myName,age,job);

// akhon amar object e rest value use korbo. 

const person1 = {
    myName: 'sizan',
    age: 20,
    job: 'student'
};
// rest value 
const { myName, ...restValue } = person1
console.log(myName, restValue);
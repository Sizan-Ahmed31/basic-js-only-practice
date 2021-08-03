// reverse a object item

// const text = 'sizan';
// function sizan (parameter){
//     return text.split('').reverse().join('');


// }
// console.log(sizan (text));

// const mobile = 'computer';

// function mouse(parameter) {
//     return mobile.split('').reverse().join('')
// }
// console.log(mouse(mobile));

const person = {
    myName: 'sizan',
    age: 20,
    job: 'student'
}

function sizan(parameter) {
    console.log(parameter);
    return `name-${parameter.myName}`

}
console.log(sizan(person))
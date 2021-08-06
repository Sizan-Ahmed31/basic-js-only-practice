// const person = [{
//         myName: 'sizan',
//         age: 20,
//         job: 'student'
//     },
//     {
//         myName: 'sorif',
//         age: 50,
//         job: 'student'
//     }
// ];

// function onlyMan(parameter) {
//     let withMan = '';
//  for (let index = 0; index < person.length; index++) {
//     withMan += `
//     name-${person[index].myName}
//     age-${person[index].age}
//     job-${person[index].job}`

// }

// function er vitor jokhon amra return use korbo tokhon function er execution bondo hoye jai.function er vitor ekadhik element thakle return use korle shudhu 1st element ta dekhai.

// person.forEach(function(person) {
//         withMan += `
//         name-${person.myName}
//        age-${person.age}
//          job-${person.job}`
//     })
// for (let index = 0; index < person.length; index++) {
//     withMan += `
//     name-${person[index].myName}
//     age-${person[index].age}
//     job-${person[index].job}`

// }
//     console.log(withMan);
//     return withMan

// }

// console.log(onlyMan(person))

// function newPerson(parameter) {
//     let singleMan = '';
//     for (let index = 0; index < person.length; index++) {  
//      singleMan += `
//      personName-${person[index].myName}
//      age-${person[index].age}
//      job-${person[index].job}`


//     }
//     console.log(singleMan)

//     return singleMan

// }
// console.log(newPerson(person));







// amra abar notun kore kortesi

// const person = [{
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// },
// {
//     myName: 'sorif',
//     age: 50,
//     job: 'student'
// }
// ];

// function newPerson (parameter){
//     let element = '';
//     for (let index = 0; index < person.length; index++) {
//         element += `
//         name-${person[index].myName}
//         age-${person[index].age}
//         job-${person[index].job}`;  
//     }
//     console.log(element)
//     return element

// }
// console.log(newPerson(person));





// const person = [{
//         myName: 'sizan',
//         age: 20,
//         job: 'student'
//     },
//     {
//         myName: 'sorif',
//         age: 50,
//         job: 'student'
//     }
// ];

// function onlyMan(parameter) {
//     let element = '';
//     for (let index = 0; index < person.length; index++) {
//         element += `
//         name-${person[index].myName}
//         age-${person[index].yourAge}
//         job-${person[index].job}`;

//     }
//     return element

// }
// console.log(onlyMan(person))


const person = [{
        myName: 'sizan',
        age: 20,
        job: 'student'
    },
    {
        myName: 'sorif',
        age: 50,
        job: 'student'
    }
];

function bestMan(person) {
    let element = '';
    for (let index = 0; index < person.length; index++) {
        element += `
        name-${person[index].myName}
        age-${person[index].age}
        job-${person[index].job}`;

    }
    console.log(element)
    return element

}
console.log(bestMan(person))


// return `name- ${element.myName}, age- ${element.age}, job- ${element.job}`
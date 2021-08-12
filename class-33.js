// // practice forEach loop and forof loop and get output

// // const person = [{
// //         myName: 'sizan',
// //         age: 20,
// //         job: 'student'
// //     },
// //     {
// //         myName: 'sorif',
// //         age: 50,
// //         job: 'student'
// //     },
// // ];

// // // for each loop practice

// // function realPerson(parameter) {
// //     let onlyPerson = '';
// //     person.forEach(function(person) {
// //         onlyPerson += `
// //         name-${person.myName}
// //         age-${person.age}
// //         job-${person.job}`
// //     })

// //     return onlyPerson
// // }
// // console.log(realPerson(person));


// // forof loop practice

// // const person = [{
// //         myName: 'sizan',
// //         age: 20,
// //         job: 'student'
// //     },
// //     {
// //         myName: 'sorif',
// //         age: 50,
// //         job: 'student'
// //     },
// // ];

// // function onlyPerson(parameter) {
// //     let realman = '';
// //     for (let person of parameter) {
// //         realman += `
// //              name-${person.myName}
// //              age-${person.age}
// //              job-${person.job}`
// //     }



// //     // person.forEach(function(person){
// //     //     realman+=`
// //     //     name-${person.myName}
// //     //     age-${person.age}
// //     //     job-${person.job}`
// //     // })
// //     console.log(realman)
// //     return realman
// // }
// // console.log(onlyPerson(person))

// // const person = [{
// //     myName: 'sizan',
// //     age: 20,
// //     job: 'student'
// // },
// // {
// //     myName: 'sorif',
// //     age: 50,
// //     job: 'student'
// // },
// // ];

// // function realMan (parameter){
// //     let oneMan = '';
// //     for (let index = 0; index < person.length; index++) {
// //          oneMan += `
// //          name-${person[index].myName}
// //          age-${person[index].age}
// //          job-${person[index].job}`;

// //     }
// //     console.log(oneMan)
// //     return oneMan

// // }

// // console.log(realMan (person));


// //   using for each 



// // const person = [{
// //     myName: 'sizan',
// //     age: 20,
// //     job: 'student'
// // },
// // {
// //     myName: 'sorif',
// //     age: 50,
// //     job: 'student'
// // },
// // ];

// // function realPerson(parameter){
// //     let oneMan = '';
// //     person.forEach(function(person){
// //         oneMan += `
// //         name-${person.myName}
// //         age-${person.age}
// //         job-${person.job}`
// //     })
// //     return oneMan

// // }
// // console.log(realPerson(person));


// // using for of 


// // const person = [{
// //         myName: 'sizan',
// //         age: 20,
// //         job: 'student'
// //     },
// //     {
// //         myName: 'sorif',
// //         age: 50,
// //         job: 'student'
// //     },
// // ];

// // function onlyPerson(parameter){
// //     let oneMan = '';
// //   for (let man of parameter){
// //       oneMan += `
// //       name-${man.myName}
// //       age-${man.age}
// //       job-${man.job}`
// //   }
// // return oneMan
// // }

// // console.log(onlyPerson(person))

// // const person = [{
// //         myName: 'sizan',
// //         age: 20,
// //         job: 'student'
// //     },
// //     {
// //         myName: 'sorif',
// //         age: 50,
// //         job: 'student'
// //     },
// // ];

// function fName(person) {
//     let man = '';
//     person.forEach(person => {
//         man += `
//         name-${person.myName}
//         age-${person.age}
//         job-${person.job}`

//     });
//     return man

// }
// console.log(fName(person))

// const person = [{
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// },
// {
//     myName: 'sorif',
//     age: 50,
//     job: 'student'
// },
// ];

// function abc(parameter){
//     let xyz = '';
//    for (let element of parameter){
//        xyz += `
//        name- ${element.myName}
//        age- ${element.age}
//        job- ${element.job}`
//    }
//    return xyz
// }
// console.log(abc(person))
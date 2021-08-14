// aikhane akta homework kora hosse jekhane amra ternary operator use kore akta new element add korte pari.
const person = [{
        myName: 'sizan',
        age: 20,
        job: 'student',
        resultIsAvailable: true
    },
    {
        myName: 'sorif',
        age: 50,
        job: 'student',
        resultIsAvailable: false
    },
];

const onlyPerson = function(parameter) {
    let realman = '';
    for (let person of parameter) {

        // ekhane amra destructure kore task k ro soto korte pari.
        const { myName, age, job, resultIsAvailable } = person
        realman += `
     name-${myName}
     age-${age}
     job-${job}
     ${resultIsAvailable ? 'in stock' : 'out of stock'}`
    }


    console.log(realman);
    return realman

}
console.log(onlyPerson(person));
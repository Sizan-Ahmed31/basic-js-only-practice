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

const result = (parameter) => {
    let x = '';
    for (let el of parameter) {
        const { myName, age, job } = el
        x += `
        name- ${myName}
        age- ${age}
        job- ${job}`
    }
    return x

}
console.log(result(person))
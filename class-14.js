// better data structure 
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


function anyMan(parameter) {
    console.log(parameter)
    const [person1, person2] = parameter;
    console.log(person1);
    console.log(person2);
    return `name-${person2.myName} age-${person2.age} job-${person2.job}`


}
console.log(anyMan(person));
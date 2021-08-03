const person = {
    myName: 'sizan',
    age: 20,
    job: 'student'
};

// accessing with array system
console.log(person['myName'], person['age'], person['job']);
console.log(`name-${person['myName']} age-${person['age']} job-${person['job']}`);

// accessing with object system
console.log(person.myName, person.age, person.job);
console.log(`name-${person.myName} age-${person.age} job-${person.job}`);
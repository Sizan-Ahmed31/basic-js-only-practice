const person1 = {
    myName: 'sizan',
    age: 20,
    job: 'student'
};
const person2 = {
    myName: 'shorif',
    age: 50,
    job: 'student'
};

const person3 = {
    myName: 'ahmed',
    age: 30,
    job: 'student'
};

function bestMan(parameter, parameter2) {
    console.log(parameter2)

    return `name-${parameter.myName} age-${parameter.age} job-${parameter.job}`;
}

const man1 = bestMan(person1, 'person3');
console.log(man1);
const man2 = bestMan(person2, 'person4');
console.log(man2);
const man3 = bestMan(person3, 'person5');
console.log(man3);

// amra ek ba ekadhik paramater and argument nite pari

const product = ['potato', 30, true];
const [productName, price, available] = product;
console.log(productName, price, available);
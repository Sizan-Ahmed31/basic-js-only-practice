// spred operator practice.spread operator use kora hoi kono array ba object k copy korte othoba structure k flat korte
const text1 = ['i', 'love', 'programming'];
const text2 = ['we', 'all', 'programmers'];
const text3 = [...text1, 'and', ...text2];
console.log(text3);


const person1 = {
    myName: 'sizan',
    age: 20,
    job: 'student'

};
const person2 = {
    ...person1,
    update: 'newInformation'
};

const person3 = {
    ...person1,
    old: 50,
    ...person2

};
console.log(person3)
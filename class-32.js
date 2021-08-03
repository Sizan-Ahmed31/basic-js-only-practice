// this class we learn forOf loop and forIn loop
// airokom simple looping er value ber korar jonno amra ai 
// forof loop use korbo aita use kora hoi array ar jonno.
const object = ['i', 'love', 'programming'];
for (let iterator of object) {
    console.log(iterator);
};

// akhon amra shikbo forin loop jeita use kora hoi object ar jonno.
const person1 = {
    myName: 'sizan',
    age: 20,
    job: 'student'
};
for (let key in person1) {
    console.log(person1 [key]);
}
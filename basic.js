const number = ['i', 'love', 'program'];
for (let index = 0; index < number.length; index++) {}
number.forEach(function(el) {
    console.log(el)

});


const arr = ['i', 'love', 'program'];
for (let sizan of arr) {
    console.log(sizan);
}

const object = {
    myName: 'sizan',
    age: 20
};
for (let sorif in object) {
    console.log(object[sorif])


}
// array properties

const text = ['i', 'love', 'programming'];
// checking length
console.log(text.length);
// checking index
console.log(text[1]);
// adding and removing element to end to main element
console.log(text.push('$'));
console.log(text.pop('$'));
console.log(text);

// adding and removing element to start to main element
console.log(text.unshift('$'));
console.log(text.shift('$'));
console.log(text);

// using slice and splice
// when we using slice it can't impact on main content
console.log(text.slice(0, 2));
// when we use splice it's impact on main element
// console.log(text.splice(0, 2));
console.log(text);

console.log(text.concat('?'))
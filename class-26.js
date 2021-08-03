// js properties and methods
const text = 'i love programming'
    // length
console.log(text.length);
// index of
console.log(text[5]);
// character finding
console.log(text.charAt(4));
// finding index
console.log(text.indexOf('v'));
// uppercase and lowercase
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// checking include character or word
console.log(text.includes('love'));
console.log(text.includes('z'));

// removing space from start and end by using trim
console.log(text.trimStart().length);
console.log(text.trimEnd().length);
console.log(text.trim().length);

// cut any part from content by using slice and substr.

console.log(text.slice(0, 6));
console.log(text.substr(0, 6));

// add extra contect by using concat() we add !.
console.log(text.concat('!'));

// take a space from string and convert to array
console.log(text.split(' '));
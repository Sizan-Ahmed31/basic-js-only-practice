// slice and splice are work in similar way they cut content from main content.but the difference between slice and splice are slice cannot effect on main content but splice can effect on main content.



// const text = ['i', 'love', 'programming'];
// console.log(text.splice(0,1,'we'));
// console.log(text);


// const text = ['i', 'love', 'programming'];
// console.log(text.slice(1, 3));
// const newText = ['we', ...text.slice(1, 3)];
// // for removing [] we can use (...) spread operator
// console.log(newText)

const text = ['i', 'love', 'programming'];
// console.log(text.splice(0,1,'we','love','you'));
// console.log(text)

console.log(text.slice(1, 3));
const newText = ['we', ...text.slice(1, 3)];
console.log(newText)
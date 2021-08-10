// today we learn switch statement in practice. when we necessay a large number condition we use it inspite of if,else if ,else.
const price = 150;
let freeshepping = true;
let handpick = true;
switch (price) {
    case price >= 120 && price:
        freeshepping = true;
        handpick = false;
        break;
    case price < 60 && price:
        freeshepping = false;
        handpick = true;
        break;
    default:
        freeshepping = false;
        handpick = false;

}
console.log(freeshepping)
console.log(handpick)
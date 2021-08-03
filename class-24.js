// today we learn switch statement. when we necessay a large number condition we use it inspite of if,else if ,else.

const price = 70;
let prize = true;
let chocolate = true;
switch (price) {
    case 100:
        prize = true;
        chocolate = false;
        break;
    case 80:
        prize = false;
        chocolate = true;
        break;
    case 70:
        prize = true;
        chocolate = true;
        break;
    case 50:
        prize = false;
        chocolate = false;
        break;
    default:
        prize = false;
        chocolate = false;
}
console.log(prize)
console.log(chocolate)
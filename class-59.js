// today we learn this keyward explain
// 'this' er 3 ta rules ase 
// 1.'this' indicate window
// 2.jokhon amra this k kono object er vitore use korbo tokhon this indicate korbe tar parent object k.
// 3.constructor function er somoy this indicate  korbe amra structure er ses e jei object ta creat korbo.

// 1.'this' indicate window

console.log(this)



// 2.jokhon amra this k kono object er vitore use korbo tokhon this indicate korbe tar parent object k.
//  ekhane this indicate kortese product parent obj k 
// const product ={
//     prductName:'potato',
//     price:50,
//     quantity:5,
//     newProduct:function(){
//         return `name-${this.prductName} price-${this.price} quantity-${this.quantity}`
//     }

// }
// console.log(product.newProduct());





// 3.constructor function er somoy this indicate  korbe amra structure er ses e jei object ta creat korbo.

const product ={
    prductName:'potato',
    price:50,
    quantity:5
};

function justProduct(productName,price,quantity){
    this.prductName=productName
    this.price=price
    this.quantity=quantity
    this.newProduct=function(){
        // this indicate window
        function inner(){
            console.log(this)
        }
        inner()
        console.log(this)
        return `name-${this.prductName} price-${this.price} quantity-${this.quantity}`
    }
}



// akhane this indicate kortese productInfo object k
const productInfo = new justProduct('potato',50,5);
console.log(productInfo.newProduct());







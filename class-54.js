// today we learn javascript argument object 
// amra jani j amra function e argument pass kori and parameter recieve kori. tow ami jokhon program creat korbo tokhon jodi na jani j amak koto gula argument nite hobe and parameter recieve korte hobe tahole aita janar jonno js amader 'argument' name akta value disse jeita onek ta array structure er moto kintu real array na amra aikhane for of loop use kore aita value ber korte pari . kintu amra jodi ai argument k array te convert kore nei tahole amra aikhane array er sob method use kore value ber korte parbo.

// simple structure

// function arr(num1,num2,num3){
//     return num1+num2+num3
// }
// console.log(arr(5,5,5));

// aikhane arguments er structure holo array like structure not real array amra jokhon sprad operator use korlam [...arguments] tokhon aita real array te convert holo r amra value o ber korte parlam.

// tow prothome amra dekhbo kivabe 'spread operator' use kore arguments er value ber korte pari .akhane ashole amra kisu shonkhar jogfol ber korbo.

// aikhane spread operator use korar karone amara reduce method use korte parisy.

// function arr (){
//     const arr = [...arguments]
//     const total = arr.reduce(function(acc,curr){
//             return acc+curr
//     })
//     return total
// }
// console.log(arr(30,20,20,30))

function reduceArr() {
    const arr = [...arguments]
    const total = arr.reduce(function(acc, cur) {
        return acc + cur
    })
    return total


}

console.log(reduceArr(20, 30, 40))
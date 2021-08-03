// ekhane function holo akta statement not expression karon amra aikhne directly variable name sum dhore call korte parsi na additionally () dewa lagetese. 
// const sum = function name(params) {
//     return 'hello'
// }

// console.log(sum());




// akhon amra function k expression e convert korbo and sum ai variable name dhore access korte parbo. akhane amra functio e () use kore expression e poriborton koresi. akhn ai function ti holo expression

const sum = (function name(params) {
    return 'hello'
}())

console.log(sum);




// amra jani scope 2 prokar 1.global 2.local/functionlal .amra jokhon program creat korbo tokhon amra try korbo sob function k akta scope er moddhe rakhar mane akta functional scope e rakha and global scope ta avoid kora .aita best practice global scope thake nijer ojante onk vul hote pare . jemonta amra niche ai system ta avoid koresi. functional scope er benifit amra issa korle onno kono file thke r overwrite korte parbo na. ai system k akta special name e daka hoi ....IIFE = immideatly inbo function expression.



   (function() {
        
    const person = [{
        myName: 'sizan',
        age: 20,
        job: 'student',
        resultIsAvailable: true
    },
    {
        myName: 'sorif',
        age: 50,
        job: 'student',
        resultIsAvailable: false
    },
];
    const onlyPerson = function(parameter) {
        let realman = '';
        for (let person of parameter) {
            realman += `
             name-${person.myName}
             age-${person.age}
             job-${person.job}`
        }


        console.log(realman);
        return realman

    }
    console.log(onlyPerson(person));
}())
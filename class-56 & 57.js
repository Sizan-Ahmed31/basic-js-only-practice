// class on factory function vs constructor function

// factory function structure . factory function er kaj hosse notun akta result produce kore return kora.

// const person = {
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// }

// function obj(myName, age, job) {
//     return {
//         myName,
//         age,
//         job
//     }
// }
// console.log(obj('sizan', 20, 'student'));


// amra ai structure ta k aro easily access korte pari and output same hobe 
// const person = {
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// }

// function obj(parameter) {
//     return parameter

// }
// console.log(obj(person));




// constractor function structure. constructor function er kaj hosse notun akta structure dar koranao/grouping kora .aita notun kono result return kore na. 

// constructor function
// const person = {
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// }

// function Obj(myName, age, job) {

//     this.myName = myName
//     this.age = age
//     this.job = job
//     this.new = function(){
//         return `name-${this.myName} age-${this.age} job-${this.job}`
//     }

// }

// // ekhane ashole 'this' bolte ai 'man' object ta k bujhai.
// const man = new Obj('sizan', 20, 'student')
// console.log(man.new())
// console.log(man)
//     console.log(Obj('sizan', 20, 'student'));


// function Person (name,age,classs){
//     this.name = name
//     this.age = age
//     this.classs = classs
//     this.new = function(){
//         return `name-${this.name} age-${this.age} classs-${this.classs}`
//     }

// }
// const result = new Person ('sizan',20,11)
// console.log(result.new())
// console.log(result)
// Person ('sizan',30,11)

// function Constructor(nam, age, job) {

//     this.nam = nam
//     this.age = age
//     this.job = job
//     this.show = function() {
        
//         return `name-${this.nam} age-${this.age} job-${this.job}`
//     }

// }
// const realPerson = new Constructor('sizan', 20, 'student')


// console.log(realPerson.show())

// new Constructor('sizan', 20, 'student')




// "// class-57." akhane ashole amra amader class ta ses kori ni class ta onek kothin tai abar amader notun kore class-56&57 korte hobe

// const person = {
//     myName: 'sizan',
//     age: 20,
//     job: 'student'


// }


function Person(myName, age, job) {

    this.myName = myName
    this.age = age
    this.job = job
    this.newPerson = function() {
        return `name-${this.myName} age-${this.age} job-${this.job}`
    }
}
Person.prototype.showMan = function(){
    return `name-${this.myName} age-${this.age} job-${this.job}`
}

const newKey = new Person('sizan',20,'student')
// console.log(newKey.newPerson())
console.log(newKey)
console.log(newKey.showMan())



// // ekhane ashole 'this' bolte ai 'man' object ta k bujhai.
// const man = new Obj('sizan', 20, 'student')


// console.log(man.newPerson());



// ekhane.. 

// this.name
// this.age
// this.job

// eigula ak akta object amra object er under e jemon property use korte pari thik temon akta method o use korte pari.karon aikhane this bolte ai man object ta k bujhai


// const person = {
//     myName: 'sizan',
//     age: 20,
//     job: 'student'
// }
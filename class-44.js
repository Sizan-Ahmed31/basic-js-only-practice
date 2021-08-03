// data type 2 prokar 1.primitives 2.complex data dype ai complex data type k reference data type o bole.
// ajker class e amra shikbo compare by value vs compare by reference. 


// primitives data type. primitives data type er somoy jokhon amra compare kori tokon ai value jemon 10 compare hoi.ekane location jemon a,b different holeo value match korar karone result true astese.

// all primitives compare by value
const a = 10;
const b = 10;
console.log(a === b);


// complex data type.reference/complex data type er somoy jokhon amra compare kori tokon ai value jemon compare hoi na .ekane location jemon aobj,bobj compare hoi r ai reference different howar karone result false astese.
// tahole amra bujlam primitives er somoy value match hoi r reference er somoy location match hoi.

// all object data type compare by reference(memory location)
const aobj = { a: 10 };
const bobj = { b: 10 };
console.log(aobj === bobj);
// amra jodi reference er sathe jodi variable keo call kori tahole result true asbe jemon
console.log(aobj.a === bobj.b)

const cobj = [10];
const dobj = [10];
console.log(cobj === dobj);
// array er somoy jodi amra reference er sathe index num dhore call kori tahole result true asbe.
console.log(cobj[0] === dobj[0]);
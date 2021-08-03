// class on pass by value and pass by reference.
// primitives data type er somoy amra joto data function er moddho dea pass kori sei data gula value hisabe pass hoi.ekhane ashole a er value 10 k amra jokhon b reference dea call kortesy tokhon a er value copy hosse kono change hosse na.tokhon ashole a er sathe b er kono connection nai. tai amra next e jokhon b k change kortesy tokhono a er kono change hosse na.
// const a = 10;

// function passvalue(a) {
//     let b = a;
//     console.log(b);
//     b = 20;
//     console.log(b);

// }
// passvalue(a);
// console.log(a);






// object data type er somoy amra joto data function er moddhe dea pass kori sei data gula reference hisabe pass hoi(memory location).ekhane ashole aobj and bobj eki location k indicate kortese .mane aikhane kono copy hosse na . aobj er sathe bobj er connection ase tai akhane amra bobj k change korle aobj o change hosse.ekhane aobj and bobj same location and same data k indicate kortese.

// const aobj = {
//     num: 20
// }

// function passReference(aobj) {
//     console.log(aobj)
//     const bobj = aobj;
//     console.log(bobj);
//     bobj.num = 40;
//     console.log(bobj)

// }
// passReference(aobj)
// console.log(aobj)




const a = 'sizan';

function passValue(a) {
    console.log(a);
    let b = a;
    console.log(b)
    b = 'sorif';
    console.log(b)

};

passValue(a);
console.log(a);


const aArr = { man: 'sizan' };

function passReference(aArr) {
    console.log(aArr);
    let bArr = aArr;
    console.log(bArr)
    bArr.man = 'sorif';
    console.log(bArr)
    console.log(aArr)

}
passReference(aArr)
console.log(aArr)

// function doubleThevalue(value){
//     let cal = value * 2;
//     return cal;
// }

// function tripleThevalue(value){
//     let cal = value * 3;
//     return cal;
// }

// let ret = tripleThevalue(40);
// console.log(ret);

function multiplair(a3){
    let f3 = function multiply(b3){
        let c3 = a3 * b3;
        return c3;
    }
    return f3;
}

let double = multiplair(2);
let ret = double(80);
let triple = multiplair(3);
let ret2 = triple(80);
let quadruple = multiplair(4);
let ret3 = quadruple(80);
let fourfold = multiplair(5);
let ret4 = fourfold(80);

console.log(ret);
console.log(ret2);
console.log(ret3);
console.log(ret4);


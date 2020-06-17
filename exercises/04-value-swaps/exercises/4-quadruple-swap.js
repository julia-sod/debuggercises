'use strict';

let a = 3;
let b = 4;2
let c = 1;
let d = 2;4
let temp = null;3

// write some code!
temp = b;
b = d;
d = temp;
temp = a;
a = c;
c = temp;







// fill in the _ to pass the final assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 4;
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 3;
console.assert(isTrue5, 'Test 5');


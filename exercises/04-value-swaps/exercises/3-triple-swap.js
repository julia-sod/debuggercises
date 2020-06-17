'use strict';

let a = 2; 1
let b = 3; 2
let c = 1; 3
let temp = null; 2

// write some code!
temp = a;
a = c;
c = b;
b = temp;





// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 3;
console.assert(isTrue3, 'Test 3');

const isTrue4 = temp === 2;
console.assert(isTrue4, 'Test 4');


function mystery(a, b) {
  let result = '';
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = 'path 1';
    } else {
      result = 'path 2';
    }
  } else {
    if (typeof a === typeof b) {
      result = 'path 3';
    } else {
      result = 'path 4';
    }
  }
  return result;
}

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery(1, 2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(8, -12);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 'path 2';
const _3_actual = mystery(4, 'hi');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery(-100, false);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = 'path 3';
const _5_actual = mystery(true, false);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 3';
const _6_actual = mystery('pink', 'blue');
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'path 4';
const _7_actual = mystery(null, true);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 4';
const _8_actual = mystery(false, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

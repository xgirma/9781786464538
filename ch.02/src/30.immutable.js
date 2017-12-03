const x = [ 1, 2 ];
const add = arr => arr.concat(3);
const y = add(x);
console.log(x); // [ 1, 2 ] - unchanged
console.log(y); // [ 1, 2, 3 ]
const z = add(x);
console.log(x); // [ 1, 2 ] - unchanged
console.log(z); // [ 1, 2, 3 ]
const x = [ 1, 2 ];
const add = arr => arr.push(3);
add(x);
console.log(x); // [ 1, 2, 3 ]
add(x);
console.log(x); // [ 1, 2, 3, 3 ]

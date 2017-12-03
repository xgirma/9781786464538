let x = 0;

const add = y => (x = x + y);

console.log(add(1));  // 1
console.log(add(1));  // 2
console.log(add(1));  // 3


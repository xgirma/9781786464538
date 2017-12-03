// const add = ( x, y) => x + y

const add = x => y => x + y;

const sum = add(1);
const x = sum(2);   // 3
console.log(x);
const y = sum(3);
console.log(y);     // 4
const add = (x, y) => x + y;
const square = x => x * x;

const addAndSquare = (x, y) => square(add(x,y));

console.log(addAndSquare(2,3)); // 25

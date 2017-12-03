function f(...[x, y, z]){
  return x + y + z;
}

console.log(f());           // NaN
console.log(f(1));          // NaN
console.log(f(1,2));        // NaN
console.log(f(1,2,3));      // 6
console.log(f(1,2,3,4));    // 6
console.log(f(1,2,3,4,5));  // 6

function f(...args){
  return args.length;
}

console.log(f());           // 0
console.log(f(1));          // 1
console.log(f(1,2));        // 2
console.log(f(1,2,3));      // 3
console.log(f(1,2,3,4));    // 4
console.log(f(1,2,3,4,5));  // 5

function f(multiplier, ...args){
  return args.map(function(arg){
    return multiplier * arg;
  });
}

function g(multiplier, ...args){
  return args.map(arg => multiplier * arg);
}

console.log(f());           // []
console.log(f(1));          // []
console.log(f(1,2));        // [ 2 ]
console.log(f(1,2,3));      // [ 2, 3 ]
console.log(f(1,2,3,4));    // [ 2, 3, 4 ]
console.log(f(1,2,3,4,5));  // [ 2, 3, 4, 5 ]

console.log(g(1,2,3,4,5));  // [ 2, 3, 4, 5 ]

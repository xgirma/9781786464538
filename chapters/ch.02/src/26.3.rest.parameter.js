const add = (x, y) => x + y;

const log = func = (...args) => {
  console.log(...args);             // 3
  console.log(args.length);         // 1
  return args;
};

const result = log((add(1,2)));
console.log(result);                // [ 3 ]
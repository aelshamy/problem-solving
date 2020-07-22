// O(n) time complexity
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

const fib = memoize(fib);

console.log(fib(8));

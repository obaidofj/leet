

var curry = function(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function(...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
  };

  
  
 function sum(a, b) { return a + b; }
 const csum = curry(sum);
 console.log( csum(1,2)(2,2) ); // 3
 
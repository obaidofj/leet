var curry = function(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function(...nextArgs) {
          const combinedArgs = [...args, ...nextArgs];
          if (combinedArgs.length >= fn.length) {
            return fn(...combinedArgs);
          } else {
            return curried(...combinedArgs);
          }
        };
      }
    };
  };
  

  function sum(a, b,c) { return a + b+c; }


  const csum = curry(sum);
 console.log( csum(1,3,3)(2,2) );
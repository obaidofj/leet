

function memoize(fn) {
    let prevCalls={};
    let result;
    let prevResult;
    prevResult=find res
    return function(...args) {
        let fArgs=this.args;
        if(fArgs not in prevCalls)
        {
          result=fn(fArgs)
          ar.fArgs=result;
          return result;
        }
        else
        {

            return prevResult;
        }

    }
}


factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
fib= (n)=> (n <= 1) ?  1 : fib(n - 1) + fib(n - 2);

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
  return a + b;
});

memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5

console.log(callCount); // 1 

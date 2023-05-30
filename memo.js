

function memoize(fn) {
    let prevCalls={};
    let result;
    let prevResult;
   
    return function(...args) {
        let fArgs=[...args];
        fArgs=JSON.stringify(fArgs);
        if (fArgs in prevCalls ) { //&& prevCalls[fArgs] === value
             return  prevCalls[fArgs];
        } 
        else
        {
          result=fn(...args);
          prevCalls[fArgs]=result;
          return result;
        }
       
        
    }
}


let factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
let fib= (n)=> (n <= 1) ?  1 : fib(n - 1) + fib(n - 2);
let sum=function (a, b) {
    callCount += 1;
 return a + b;
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
  return a + b;
});
const memoizedFn2 = memoize(sum);
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5

console.log(callCount); // 1 

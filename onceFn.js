var once = function(fn) {
    let cntr=0;
    return function(...args){
        cntr++;
        if(cntr>1)
          return;
        else
          return fn(...args);
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn);
console.log(   onceFn(1,2,3) ); // 6 
console.log(  onceFn(2,3,6) ); // returns undefined without calling fn
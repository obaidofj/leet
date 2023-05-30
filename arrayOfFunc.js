var compose = function(functions) {
    let prevFunc;
	return function(x) {
        if(functions.length>0)
        {
        prevFunc=functions[functions.length - 1](x);
        for (let i = functions.length - 2; i >= 0; i--) {
           
                prevFunc=functions[i](prevFunc);
            
          }
        return prevFunc;
        }
        else
        return x;
    }
};



const fn1 = compose([x => x + 1, x => 2 * x])
console.log(fn1(4)); // 9

let arr=[x => x + 1, x => x * x, x => 2 * x];

let fn=compose(arr);

// console.log( fn(2));
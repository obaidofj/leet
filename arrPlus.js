

var map = function(arr, fn) {
    let newArr=[];
    const transformedArray = [];
    let x=0;
    for (let i = 0; i < arr.length; i++) {
      // if (fn.length === 1) {
      //   transformedArray.push(fn(arr[i]));
      // } else {
        transformedArray.push(fn(arr[i], x));
      // }
    }
  
    return transformedArray;
}

fn = function plusone(n) { return n + 1; }
fn2 = function plusI(n, i) { return n + i; }
fn3 = function constant() { return 42; }

let arr0=[1,2,3,4];
//  let arr2=map(arr, function(x) {
//     return fn2(x, 5);
//   });

// let arr2= map(arr0,  function(x,y) {
//       return fn2(x, 5);
//     });

// let x=0;
let arr2= map(arr0,  (x,y)=>fn2(x,4) );

console.log(arr2);
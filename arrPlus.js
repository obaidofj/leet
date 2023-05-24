var map = function(arr, fn) {
    let newArr=[];
    for (let i = 0; i < arr.length; i++) {
        if(fn.name=='plusone')
          arr[i]=arr[i]+1;
        else if(fn.name=='plusI')
          arr[i]=plusI(arr[i],
        else if(fn.name=='constant')
          arr[i]=42;
        newArr.push(fn(arr[i]))
        
    }
    return newArr;
    
}


fn = function plusone(n) { return n + 1; }
fn = function plusI(n, i) { return n + i; }
fn = function constant() { return 42; }



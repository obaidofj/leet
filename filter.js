



fn = function greaterThan10(n) { return n > 10; }

var filter = function(arr, fn) {
    let newArray=[];
     arr.forEach((element,ind) => {
         if(fn.length==1)
         {
         if(fn(element))
          newArray.push(element); 
         }
         else
         {    
             if(fn(element,ind))
               newArray.push(element); 
         }

    });
    return newArray;
};


let ar=[1,20,3,16];

console.log(filter(ar,fn));


// console.log(typeof 0);


var checkIfInstanceOf = function(obj, testObj) {

    if (typeof testObj !== 'function') {
      return false;
    }
  
    if (typeof obj === 'object' || typeof obj === 'function') {
      return obj instanceof testObj;
    }
     objTr={'number':'Number', 'string':'String' , 'boolean':'Boolean' , 'symbol':'Symbol' , 'bigint':'Bigint'}
    if(  ['number', 'string' , 'boolean' , 'symbol' , 'bigint'].includes(typeof obj)&& testObj.name=="Object" )
    {
  
     return  true;
  
    }
  
    return Object.prototype.toString.call(obj) === `[object ${testObj.name}]`;
  
  
  };

  
  console.log((() => checkIfInstanceOf(0, Object))());
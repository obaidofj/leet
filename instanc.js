var checkIfInstanceOf = function(obj, testObj) {

    if (typeof testObj !== 'function') {
      return false;
    }
  
    if (typeof obj === 'object' || typeof obj === 'function') {
      return obj instanceof testObj;
    }
     objTr={'number':'Number', 'string':'String' , 'boolean':'Boolean' , 'symbol':'Symbol' , 'bigint':'Bigint'}
    if(  ['number', 'string' , 'boolean' , 'symbol' , 'bigint'].includes(typeof obj))
    {
  
     return  eval (`new ${objTr[typeof obj]}(${obj}) instanceof ${testObj}`);
  
    }

    if(['Number', 'String' , 'Boolean' , 'Symbol' , 'Bigint'].icludes(Object.prototype.toString.call(obj)))
     return true;
  
    return Object.prototype.toString.call(obj) === `[object ${testObj.name}]`;
  
  
  };
  Object.prototype.toString.call(obj)
  console.log( checkIfInstanceOf(0,Object));
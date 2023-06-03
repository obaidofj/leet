// console.log(Object.prototype.toString.call(0)); 

var checkIfInstanceOf = function(obj, classFunction) {

    if (typeof classFunction !== 'function') {
      return false;
    }
  
    if (typeof obj === 'object' || typeof obj === 'function') {
      return obj instanceof classFunction;
    }
  
    if(Object.prototype.toString.call(obj) !== `[object ${classFunction.name}]`)
{
    return classFunction.name instanceof classFunction
}
    return Object.prototype.toString.call(obj) === `[object ${classFunction.name}]`;
  
    
  
  };

  /*
  ['number', 'string' , 'boolean' , 'symbol' , 'bigint'].includes(typeof obj)
  if (typeof value === ) {
    console.log('value is a number');
  } else if (typeof value === 'string') {
    console.log('value is a string');
  } else if (typeof value === 'boolean') {
    console.log('value is a boolean');
  } else if (typeof value === 'undefined') {
    console.log('value is undefined');
  } else if (typeof value === 'symbol') {
    console.log('value is a symbol');
  } else if (typeof value === 'bigint') {
    console.log('value is a bigint');

    */

  console.log(Object.prototype.toString.call(0));
  console.log(Object.name);
  console.log((() => checkIfInstanceOf(0, Object))());

//   let x =new Number(5)
   console.log(eval (`new Number(5) instanceof Number`));

// console.log(  typeof ( ( eval('New(Number)')(5))));

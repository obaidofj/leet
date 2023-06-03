
obj1 = {
    "a": 1,
    "v": 3,
    "x": [{
        "c": null,
        "e": [2,3,6]
      },{},{d:{"e":7,"f":8,"g":9}}],
    "z": {
      "a": null
    }
  }

// console.log( Object.keys(obj1));
//
obj2=[{'a':1,'b':[[['a','a'],'e',2]]},[]];

function listAllKeys(obj)
{
for (let key in obj) {
    // if(typeof obj=="array")
       console.log(typeof(obj));

    if (obj.hasOwnProperty(key)) {
        console.log('--------------------');
      if(key==0)
       console.log(typeof(key),key);
      else
       console.log(key);
      
      if( typeof(obj[key])==='object' )
      { //console.log(obj[key]);
        listAllKeys(obj[key]);
      }
        
    }
  }
}

let obj3 = [[{}],[]];
// obj3.length = 2;

// console.log(Object.entries(obj3));  // Output: [ '0', '1' ]
console.log(Object.keys(obj2));  // Output: [ '0', '1' ]




// listAllKeys(obj2);

/*
  const arr2 =[1,4,6];//{ a: 1, b: 2, c: 3 };

for (const el in arr2) {
  console.log(arr2[el]); // Output: 'a', 'b', 'c'
}

const arr = [1, 2, 3];
arr.foo = 'bar';

for (const index in arr) {
  console.log(index); // Output: '0', '1', '2', 'foo'
}

for (const value of arr) {
  console.log(value); // Output: 1, 2, 3
}

*/

/*

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Access the key: obj[key]
    }
  }

  
  const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  // Access the key: obj[key]
}



const entries = Object.entries(obj);
for (let i = 0; i < entries.length; i++) {
  const [key, value] = entries[i];
  // Access the key: value
}


Object.keys(obj).forEach(function (key) {
    // Access the key: obj[key]
  });

*/
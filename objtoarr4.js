var jsonToMatrix = function(arr) {
 
    let columnSet = new Set();
    let matrix = [];
  
    
    arr.forEach(obj => {
      extractColNames(obj, '', columnSet);
    });
  
    
    let columns = Array.from(columnSet).sort();
  
    
    matrix.push(columns);
  
    
    arr.forEach(obj => {
      let row = [];
      columns.forEach(col => {
        let value = getValFromObj(obj, col.split('.'));
        row.push(value !== undefined ? value : '');
      });
      matrix.push(row);
    });
  
    return matrix;
  }
  
  function extractColNames(obj, prefix, columnSet) {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        let newPrefix = prefix ? prefix + '.' + index : String(index);
        extractColNames(item, newPrefix, columnSet);
      });
    } else if (typeof obj === 'object' && obj !== null) {
      for (let key in obj) {
        let newPrefix = prefix ? prefix + '.' + key : key;
        extractColNames(obj[key], newPrefix, columnSet);
      }
    } else {
      let columnName = prefix ? prefix : '';
      columnSet.add(columnName);
    }
  }
  
  function getValFromObj(obj, keys) {
    for (let key of keys) {
      if (typeof obj !== 'object' || obj === null || !obj.hasOwnProperty(key)) {
        return undefined;
      }
      else if (Array.isArray(obj) && obj.length === 0 ) {
        return undefined;
      }
      else if (Array.isArray(obj) && obj.length !== 0 && obj[0]===key) {
        return key;
      }
      obj = obj[key];
    }
    return obj;
  }
  

let arr = [
  [{"a": null}],
  [{"b": true}],
  [{"c": "x"}]
]

let arr22=[[[[1]]],[[2]],[3]];

let outp=[["0","0.0","0.0.0"],["","",1],["",2,""],[3,"",""]];

let outp2Err=[
  [ '0', '0.0', '0.0.0' ],
  [ [ [Array] ], [ 1 ], 1 ],
  [ [ 2 ], 2, '' ],
  [ 3, '', '' ]
];

console.log(jsonToMatrix(arr22));

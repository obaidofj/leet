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
        row.push((value !== undefined && !Array.isArray(value))  ? value : '');
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
  
  function getValFromObj(objOrArr, keys) {
    for (let key of keys) {
      if (typeof objOrArr !== 'object' || objOrArr === null || !objOrArr.hasOwnProperty(key)) {
        return undefined;
      }
      else if (Array.isArray(objOrArr) && objOrArr.length === 0 ) {
        return undefined;
      }
      else if (Array.isArray(objOrArr) && objOrArr.length !== 0 && objOrArr[0]===key) {
        return key;
      }
      objOrArr = objOrArr[key];
    }
    return objOrArr;
  }
  

let arr = [
  [{"a": null}],
  [{"b": true}],
  [{"c": "x"}]
]

let arr22=[[[[1]]],[[2]],[3]];

let arr23=[[[[1],4]],[[2]],[3]];

let outp=[["0","0.0","0.0.0"],["","",1],["",2,""],[3,"",""]];

let outp2Err=[
  [ '0', '0.0', '0.0.0' ],
  [ [ [Array] ], [ 1 ], 1 ],
  [ [ 2 ], 2, '' ],
  [ 3, '', '' ]
];

console.log(jsonToMatrix(arr22));

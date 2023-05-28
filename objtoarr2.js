function convertToMatrix(arr) {
    let columnSet = new Set();
    let matrix = [];
  
    // Find all unique column names by traversing the array of objects
    arr.forEach(obj => {
      extractColumnNames(obj, '', columnSet);
    });
  
    // Sort the column names in lexicographically ascending order
    let columns = Array.from(columnSet).sort();
  
    // Create the first row with column names
    matrix.push(columns);
  
    // Populate the remaining rows with values from the objects
    arr.forEach(obj => {
      let row = [];
      columns.forEach(col => {
        let value = getValueFromObject(obj, col.split('.'));
        row.push(value !== undefined ? value : '');
      });
      matrix.push(row);
    });
  
    return matrix;
  }
  
  function extractColumnNames(obj, prefix, columnSet) {
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        let newPrefix = prefix ? prefix + '.' + key : key;
        extractColumnNames(obj[key], newPrefix, columnSet);
      } else {
        let columnName = prefix ? prefix + '.' + key : key;
        columnSet.add(columnName);
      }
    }
  }
  
  function getValueFromObject(obj, keys) {
    for (let key of keys) {
      if (obj.hasOwnProperty(key)) {
        obj = obj[key];
      } else {
        return undefined;
      }
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
  
  console.log(convertToMatrix(arr22));
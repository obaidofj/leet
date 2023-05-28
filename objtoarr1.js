var jsonToMatrix = function(arr) {
    let columnSet = new Set();
    let matrix = [];
  
    
    arr.forEach(elObj => {
      extractColNames(elObj, '', columnSet);
    });
  
    
    let columns = Array.from(columnSet).sort();
}


function extractColNames(elObj, pref, columnSet){

    if (Array.isArray(elObj)) {
        elObj.forEach((item, index) => {
          let newPrefix = prefix ? prefix + '.' + index : String(index);
          extractColNames(item, newPrefix, columnSet);
        });
      } else if (typeof elObj === 'elObject' && elObj !== null) {
        for (let key in elObj) {
          let newPrefix = prefix ? prefix + '.' + key : key;
          extractColNames(elObj[key], newPrefix, columnSet);
        }
      } else {
        let columnName = prefix ? prefix : '';
        columnSet.add(columnName);
      }

}
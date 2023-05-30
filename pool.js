function promisePool(functions, n) {
    return new Promise((resolve, reject) => {
      const results = [];
      const numFunctions = functions.length;
      let completedFunctions = 0;
  
      function executeFunction(index) {
        const currentFn = functions[index];
  
        currentFn()
          .then(result => {
            results[index] = result;
            completedFunctions++;
  
            if (completedFunctions === numFunctions) {
              resolve([results, results[results.length - 1]]);
            } else if (index + n < numFunctions) {
              executeFunction(index + n);
            }
          })
          .catch(error => {
            reject(error);
          });
      }
  
      for (let i = 0; i < n && i < numFunctions; i++) {
        executeFunction(i);
      }
    });
  }
  
  
  const functions = [
    () => new Promise(res => setTimeout(() => res(300), 300)),
    () => new Promise(res => setTimeout(() => res(401), 400)),
    () => new Promise(res => setTimeout(() => res(501), 200))
  ];
  
  promisePool(functions, 2)
    .then(results => {
      console.log(results);
    })
    .catch(error => {
      console.error(error);
    });
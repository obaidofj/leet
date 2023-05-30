async function raceExample() {
    const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 1'));
    const promise2 = new Promise((resolve,rej) => setTimeout(rej, 500, 'Promiseee 2'));
  
    try {
      const result = await Promise.race([promise1, promise2]);
      console.log(result); // Output: Promise 2
    } catch (error) {
      console.log(error); // This won't be executed in this example
    }
  }
  
  raceExample();
  
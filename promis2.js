
var timeLimit = function (fn, t) {
  const timeoutPro = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Time Limit Exceeded");
    }, t);
  });

  return async function (...args) {
    try {
      const result = await Promise.race([timeoutPro, fn(...args)]);
      if (result === "Time Limit Exceeded") {
        throw("Time Limit Exceeded");
      }
      
      return result;
    } catch (error) {
      if(error=== "Time Limit Exceeded") 
       throw("Time Limit Exceeded")
       else
       throw(error);
    }
  };
};




const limited = timeLimit(t => new Promise(res => setTimeout(res, t)), 100);
console.log(limited(150).then(console.log).catch(console.log)); // "Time Limit Exceeded" at t=100ms

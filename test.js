function mapArray(arr, fn) {
    const transformedArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (fn.length === 1) {
        transformedArray.push(fn(arr[i]));
      } else {
        transformedArray.push(fn(arr[i], i));
      }
    }
  
    return transformedArray;
  }

  
  const arr = [1, 2, 3, 4, 5];

function constant() {
  return 42;
}

const transformed = mapArray(arr, constant);
console.log(transformed); // Output: [42, 42, 42, 42, 42]


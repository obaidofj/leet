var reduce = function(nums, fn, init) {
    let curr= init;
    let newArr=[];
    nums.forEach(element => {
        newArr.push(fn(element,curr));
    });

    return newArr;

};
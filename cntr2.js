var createCounter = function(init) {
    let count=init;
    return   {
            increment:  ()=>{return ++count},
            reset:  ()=>{count=init; return init},
            decrement:  ()=>{return --count}
        }
        
    }



 const counter = createCounter(5) ;

 console.log( counter.increment()); 
 console.log(counter.reset());
 console.log(counter.decrement()); 
 
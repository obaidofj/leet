var createCounter = function(init) {
    let count=init;
    return   {
            increment:  ()=>{return ++count},
            reset:  ()=>{count=init; return init},
            decrement:  ()=>{return --count}
        }
        
    }

console.log( '😂😊');

 const counter = createCounter(5) ;

 console.log( counter.increment()); 
 console.log(counter.reset());
 console.log(counter.decrement()); 
 
let data="";

(async()=>{
 let res= await fetch("https://apis-customer.logestechs.com/api/guests/10/packages/tracking?barcode=130518024004")

 const data = await res.json();
    
    console.log(data);
})();
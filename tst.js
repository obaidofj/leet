function order(words){
    let arr=[];
    let chars=[];
    let otherWrds=[];
    words.split(' ').forEach((el,ind)=>{
      chars=el.split('');
      if (chars.includes('1'))
        arr[0]=el;
        // console.log(chars.includes('''1'));
      else if (chars.includes('2'))
         arr[1]=el;
         else if (chars.includes('3'))
         arr[2]=el;
         else if (chars.includes('4'))
         arr[3]=el;
         else if (chars.includes('5'))
         arr[4]=el;
         else if (chars.includes('6'))
         arr[5]=el;
         else if (chars.includes('7'))
         arr[6]=el;
         else if (chars.includes('8'))
         arr[7]=el;
         else if (chars.includes('9'))
         arr[8]=el;
         else
         otherWrds[otherWrds.length]=el;
         
    });

    return arr.concat(otherWrds).join(' ');
}

console.log(order("4of Fo1r ghhg pe6ople g3ood th5e the2"));


  

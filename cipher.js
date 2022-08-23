function rot13(str) {
    const myRegEx = /[A-Z]/;
    let newStrArray = [];
  
   for(let i = 0; i< str.length; i++){
     if(myRegEx.test(str[i])){
       let code = str.charCodeAt(i);
       if(code < 78){
         code += 13;
       }else{
         code -= 13;
       }
       newStrArray.push(String.fromCharCode(code));
     }else{
       newStrArray.push(str[i]);
     }
   };
    return newStrArray.join("");
  }
  
  rot13("SERR PBQR PNZC");
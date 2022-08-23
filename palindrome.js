function palindrome(str) {
    //to lowercase
    str = str.toLowerCase();
    //put in array
    let forwardArray = str.split("");
    //filter array removing everything that is not number or letter
    const myRegEx = /[a-z0-9]/;
    forwardArray = forwardArray.filter(item => {
      return myRegEx.test(item);
    });
    //create a reverse array
    let reverseArray = [];
  for(let i = 0; i < forwardArray.length; i++){
    reverseArray.unshift(forwardArray[i]);
  };
    //check to see if the reverse and forward arrays match
    let result = (forwardArray.join("")==reverseArray.join(""));
    return result;
  }
  
  palindrome("A man, a plan, a canal. Panama");
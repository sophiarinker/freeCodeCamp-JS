const romNumObjArr = [
    {"1": "M","2": "MM","3": "MMM"},
    {"1": "C","2": "CC","3": "CCC","4": "CD","5": "D","6": "DC","7": "DCC","8": "DCCC","9": "CM"},
    {"1": "X","2": "XX","3": "XXX","4": "XL","5": "L","6": "LX","7": "LXX","8": "LXXX","9": "XC"},
    {"1": "I","2": "II","3": "III","4": "IV","5": "V","6": "VI","7": "VII","8": "VIII","9": "IX"}
];
//convert number argument into an array of single digit strings, array must have 4 values (thousands place, hundreds place, tens place and ones place)
function convertToRoman(num) {
  let strArray = num.toString().split("");
  while(strArray.length < 4){
    strArray.unshift(" ");
  };
  // for each index of array, if digit equals to a digit 1-9, replace value with corresponding roman numeral property value from object
  for(let index = 0; index < strArray.length; index++){
    for (let number = 1; number <= 9; number++){
      if(strArray[index] == number){
        strArray[index] = romNumObjArr[index][(number.toString())];
      };
    };
  };
  // produce result by filtering out spaces and 0s and joining array items
  let result = strArray
             .filter(letter => /[^0\s]/.test(letter))
             .join("");
  return result;
}

convertToRoman(501);
function telephoneCheck(str) {
    let regEx = /^1{0,1}\s{0,1}(\d{3}|\({1}\d{3}\){1})[\s-]{0,2}\d{3}[\s(-]{0,2}\d{4}$/;
    let validPhoneNumber = regEx.test(str);
    return validPhoneNumber;
  }
  
  telephoneCheck("555-555-5555");
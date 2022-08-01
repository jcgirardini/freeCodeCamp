export function telephoneCheck(str) {
    let regExp2=/^[1]{0,1}[-\s\./]{0,2}[0-9]{3,3}?[-\s\./]{0,2}[0-9]{3,3}[-\s\./]{0,1}[0-9]{4,4}$/;
    let regExp3=/^[1]{0,1}[-\s\./]{0,2}\([0-9]{3,3}\)[-\s\./]{0,2}[0-9]{3,3}[-\s\./]{0,1}[0-9]{4,4}$/;
    return regExp2.test(str) || regExp3.test(str);
  }
  

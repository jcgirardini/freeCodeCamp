export function palindrome(str) {
  if (typeof str !== "string" || str.length === 0) {
    return false;
  }

  let myreg = /[A-Za-z0-9]/ig;
  let mystr = str.match(myreg);
  let myreturn = true;

  let i = 0;
  let j = mystr.length - 1;
  if (j >= 0) {
    while (i <= j) {
      myreturn = myreturn && (mystr[i].toLowerCase() === mystr[j].toLowerCase())
      i++;
      j--;
    }
  } else {
    myreturn = false;
  }
  
  return myreturn;
}


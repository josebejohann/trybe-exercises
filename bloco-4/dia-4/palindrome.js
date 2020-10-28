// Globally define a search pattern (Regular Expression);
let re = /[^A-Za-z0–9]/g;

function handlePalindromeStrings(string) {
  // toLowerCase() will convert our string to a lowercase string;
  //replace() will replace all unwanted characters to empty spaces;
  string = string.toLowerCase().replace(re, '');

  for (i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(handlePalindromeStrings('Arara'));

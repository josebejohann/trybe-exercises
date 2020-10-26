let a = 2;
let b = 8;
let c = 23;

function handleOddNumbers(a, b, c) {
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(handleOddNumbers(a, b, c));

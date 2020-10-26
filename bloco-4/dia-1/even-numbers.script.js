let a = 2;
let b = 7;
let c = 23;

function handleEvenNumbers(a, b, c) {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(handleEvenNumbers(a, b, c));

let a = -1;
let b = 2;
let c = 3;

function handleHigherNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else if (a === b && a > c) {
    return a;
  } else if (b === c && b > a) {
    return b;
  } else if (c === a && c > b) {
    return c;
  } else {
    return 'There is no higher number.';
  }
}

console.log(handleHigherNumber(a, b, c));

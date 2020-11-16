let a = 20;
let b = 21;

function handleHigherNumber(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return 'There is no higher number.';
  }
}

console.log(handleHigherNumber(a, b));

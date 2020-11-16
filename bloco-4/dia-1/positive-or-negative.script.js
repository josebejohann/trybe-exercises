let a = 0;

function handlePositiveOrNegative(a) {
  if (a > 0) {
    return 'This number is POSITIVE.';
  } else if (a < 0) {
    return 'This number is NEGATIVE.';
  } else {
    return 'This number is a ZERO.';
  }
}

console.log(handlePositiveOrNegative(a));

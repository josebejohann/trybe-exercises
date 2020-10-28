function handleSummation(integer) {
  let sum = 0;

  for (i = 0; i < integer; i = 0) {
    sum += integer;

    integer--;
  }

  return sum;
}

console.log(handleSummation(5));

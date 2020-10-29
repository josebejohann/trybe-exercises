function add(num1, num2) {
  let sum = 0,
    cursor = 1;

  for (i = 0; num1 || num2; i++) {
    let sumDigit = (num1 % 10) + (num2 % 10);

    sum += cursor * sumDigit;

    cursor *= sumDigit < 10 ? 10 : 100;

    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
  }

  console.log(sum);
}

add(16, 18);

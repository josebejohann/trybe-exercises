function handleFakeAndRealSum(number1, number2) {
  let sum = 0;
  let count = 1;

  // The best repetition loop to use in this exercise is while:
  // while (number1 || number2)
  for (i = 0; number1 || number2; i++) {
    // firstSum receives the sum of each division rests
    const firstSum = (number1 % 10) + (number2 % 10);

    sum += count * firstSum;

    count *= firstSum < 10 ? 10 : 100;

    number1 = Math.floor(number1 / 10);
    number2 = Math.floor(number2 / 10);
  }

  console.log(sum);
}

handleFakeAndRealSum(16, 18);

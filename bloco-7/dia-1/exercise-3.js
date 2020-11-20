const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    number * factorial(number - 1);
  }
};

factorial(4);

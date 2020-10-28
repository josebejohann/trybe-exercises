function handleRomanNumeralsConversor(string) {
  string = string.toUpperCase();

  let integers = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let sum = 0;

  for (i = 0; i < string.length; i++) {
    result = integers[string[i]];

    if (i + 1 < string.length && integers[string[i + 1]] > result) {
      sum -= result;
    } else {
      sum += result;
    }
  }

  console.log(sum);
}

handleRomanNumeralsConversor('mcmxcviii');

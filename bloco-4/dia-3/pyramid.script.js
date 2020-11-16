let n = 5;

if (n > 1) {
  for (i = 1; i <= Math.ceil(n / 2); i++) {
    let pyramid = '';

    for (j = 0; j < Math.ceil(n / 2 - i); j++) {
      pyramid += ' ';
    }

    if (n % 2 == 0) {
      for (k = 0; k < i * 2; k++) {
        pyramid += '*';
      }
    } else {
      for (k = 0; k < i * 2 - 1; k++) {
        pyramid += '*';
      }
    }

    console.log(pyramid);
  }
} else {
  console.log(
    'We cannot pass negative values (or zeros) to the base of a pyramid.'
  );
}

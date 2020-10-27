let n = 7;

if (n > 1) {
  for (j = 1; j <= Math.ceil(n / 2); j += 1) {
    hollowPyramid = '';

    if (j < Math.ceil(n / 2)) {
      for (let k = 1; k <= Math.ceil(n / 2 - j); k++) {
        hollowPyramid += ' ';
      }

      if (n % 2 == 0) {
        hollowPyramid += '*';

        for (let w = 2; w < j * 2; w++) {
          hollowPyramid += ' ';
        }

        hollowPyramid += '*';
      } else {
        if (j == 1) {
          hollowPyramid += '*';
        } else {
          hollowPyramid += '*';

          for (let w = 2; w < j * 2 - 1; w++) {
            hollowPyramid += ' ';
          }

          hollowPyramid += '*';
        }
      }

      for (w = 1; w <= Math.ceil(n / 2 - j); w++) {
        hollowPyramid += ' ';
      }

      console.log(hollowPyramid);
    } else {
      for (t = 0; t < n; t++) {
        hollowPyramid += '*';
      }

      console.log(hollowPyramid);
    }
  }
} else {
  console.log(
    'We cannot pass negative values (or zeros) to the base of a pyramid.'
  );
}

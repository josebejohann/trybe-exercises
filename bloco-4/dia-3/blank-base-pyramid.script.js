let n = 7;

for (j = 1; j <= Math.ceil(n / 2); j += 1) {
  blankBasePyramid = '';

  if (j < Math.ceil(n / 2)) {
    for (let k = 1; k <= Math.ceil(n / 2 - j); k += 1) {
      blankBasePyramid += ' ';
    }

    if (n % 2 == 0) {
      blankBasePyramid += '*';

      for (let w = 2; w < j * 2; w += 1) {
        blankBasePyramid += ' ';
      }

      blankBasePyramid += '*';
    } else {
      if (j == 1) {
        blankBasePyramid += '*';
      } else {
        blankBasePyramid += '*';

        for (let w = 2; w < j * 2 - 1; w += 1) {
          blankBasePyramid += ' ';
        }

        blankBasePyramid += '*';
      }
    }

    for (w = 1; w <= Math.ceil(n / 2 - j); w += 1) {
      blankBasePyramid += ' ';
    }

    console.log(blankBasePyramid);
  } else {
    for (t = 0; t < n; t++) {
      blankBasePyramid += '*';
    }

    console.log(blankBasePyramid);
  }
}

let n = 5;

if (n > 1) {
  for (i = 1; i <= n; i++) {
    let inverseTriangle = '';

    for (j = n; j > i; j--) {
      inverseTriangle += ' ';
    }

    for (k = 0; k < i; k++) {
      inverseTriangle += '*';
    }

    console.log(inverseTriangle);
  }
} else {
  console.log(
    'We cannot pass negative values (or zeros) to the side of a triangle.'
  );
}

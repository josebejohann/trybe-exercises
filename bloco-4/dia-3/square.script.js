let n = 5;
let square = '';

if (n > 1) {
  for (i = 0; i < n; i++) {
    square += '*';
  }

  for (j = 0; j < n; j++) {
    console.log(square);
  }
} else {
  console.log(
    'We cannot pass negative values (or zeros) to the side of a square.'
  );
}

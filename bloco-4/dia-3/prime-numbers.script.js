let n = 7;
let d = 0;

for (j = n; j > 0; j--) {
  if (n % j == 0) {
    d++;
  }
}

if (d == 2) {
  console.log(`${n} IS a prime number.`);
} else {
  console.log(`${n} is NOT a prime number.`);
}

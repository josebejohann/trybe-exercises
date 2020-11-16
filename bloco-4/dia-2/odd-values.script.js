let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = 0;
let noOdds = 'There is no odd values.';

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    odds++;
  }
}
console.log(odds !== 0 ? odds : noOdds);

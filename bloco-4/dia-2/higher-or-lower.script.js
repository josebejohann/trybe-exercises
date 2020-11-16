let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arithmeticMedia = 0;

for (i = 0; i < numbers.length; i++) {
  arithmeticMedia += numbers[i] / numbers.length;
}

let condition =
  arithmeticMedia > 20
    ? 'This value is higher than 20.'
    : 'This value is lower than 20.';

console.log(condition);

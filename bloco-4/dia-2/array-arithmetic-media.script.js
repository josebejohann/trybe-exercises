let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arithmeticMedia = 0;

for (i = 0; i < numbers.length; i++) {
  arithmeticMedia += numbers[i] / numbers.length;
}

console.log(arithmeticMedia);

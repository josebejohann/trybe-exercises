let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower = +Infinity;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < lower) {
    lower = numbers[i];
  }
}

console.log(lower);

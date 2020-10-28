function handleArray(array) {
  let higher = -Infinity;
  let index = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > higher) {
      higher = array[i];
      index = i;
    }
  }

  return `The highest number is ${higher} and its position in the array is ${index}.`;
}

console.log(handleArray([2, 3, 6, 7, 10, 1]));

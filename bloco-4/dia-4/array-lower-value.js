function handleArray(array) {
  let lower = Infinity;
  let index = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] < lower) {
      lower = array[i];
      index = i;
    }
  }

  return `The lowest number is ${lower} and its position in the array is ${index}.`;
}

console.log(handleArray([2, 4, 6, 7, 10, 0, -3]));

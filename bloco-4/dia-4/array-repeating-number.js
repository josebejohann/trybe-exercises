function handleRepeatingNumber(array) {
  let number = 0,
    count = 0;

  for (i = 0; i < array.length; i++) {
    let quantity = 0;

    for (j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        quantity++;
      }
    }

    if (quantity > count) {
      number = array[i];
      count = quantity;
    }
  }

  return `Number ${number} is the most repeated.`;
}

console.log(handleRepeatingNumber([2, 3, 2, 5, 8, 2, 3]));

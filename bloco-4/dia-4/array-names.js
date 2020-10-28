function handleArrayNames(array) {
  let name = '';

  for (i = 0; i < array.length; i++) {
    if (array[i].length > name.length) {
      name = array[i];
    }
  }

  console.log(name);
}

handleArrayNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

const longestWord = (string) => {
  const array = string.split(' ');
  const sort = array.sort((first, second) => {
    return second.length - first.length;
  });

  return sort[0];
};

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

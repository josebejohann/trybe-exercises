const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compareNumbers = (a, b) => {
  return a - b;
};

oddsAndEvens.sort(compareNumbers);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
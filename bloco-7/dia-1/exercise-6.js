const stringName = (name) => {
  const string = 'Tryber x aqui!';

  return string.replace('x', name);
};

stringName('José');

const skills = (string) => {
  const array = ['React', 'Node', 'React Native', 'JavaScript', 'ES6'];

  array.sort();

  return `${string}\nMinhas cinco principais habilidades são:\n${array}\n#goTrybe`;
};

skills(stringName('José'));

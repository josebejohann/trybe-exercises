const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeObject = (object, key, value) => (object[key] = value);
changeObject(lesson2, 'turno', 'manhã');

const listKeys = (object) => Object.keys(object);

listKeys(lesson1);

const objectLength = (object) => Object.keys(object).length;

console.log(objectLength(lesson2));

const listValues = (object) => Object.values(object);

console.log(listValues(lesson3));

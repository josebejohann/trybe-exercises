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

const listKeys = (object) => {
  for (let i in object) {
    return i;
  }
};

listKeys(lesson1);

const objectLength = (object) => {
  let length = 0;

  for (let i in object) {
    if (object[i]) {
      length += 1;
    }
  }

  return length;
};

console.log(objectLength(lesson2));

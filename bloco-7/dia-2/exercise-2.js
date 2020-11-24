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

const allLessons = {};

const changeObject = (object, key, value) => (object[key] = value);
changeObject(lesson2, 'turno', 'manhã');

const listKeys = (object) => Object.keys(object);

listKeys(lesson1);

const objectLength = (object) => Object.keys(object).length;

objectLength(lesson2);

const listValues = (object) => Object.values(object);

listValues(lesson3);

const assignObjects = (destiny, object1, object2, object3) =>
  Object.assign(destiny, object1, object2, object3);

assignObjects(allLessons, { lesson1, lesson2, lesson3 });

const allStudents = (object) => {
  let students = 0;

  for (let i in object) {
    students += object[i].numeroEstudantes;
  }

  return students;
};

allStudents(allLessons);

const handleObjectsValues = (object, position) => {
  const value = Object.values(object);

  return value[position];
};

console.log(handleObjectsValues(lesson3, 0));

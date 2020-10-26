let finalNote = 70;

function handleNoteConcept(note) {
  if (note >= 90 && note <= 100) {
    return 'A';
  } else if (note >= 80 && note < 90) {
    return 'B';
  } else if (note >= 70 && note < 80) {
    return 'C';
  } else if (note >= 60 && note < 70) {
    return 'D';
  } else if (note >= 50 && note < 60) {
    return 'E';
  } else if (note >= 0 && note < 50) {
    return 'F';
  } else {
    return 'Error!';
  }
}

console.log(handleNoteConcept(finalNote));

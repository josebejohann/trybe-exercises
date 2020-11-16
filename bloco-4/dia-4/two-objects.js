let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let anotherInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (i in info) {
  if (i !== 'recorrente') {
    console.log(`${info[i]} e ${anotherInfo[i]}`);
  } else {
    console.log('Ambos recorrentes');
  }
}

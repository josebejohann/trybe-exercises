function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDecemberCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (i = 0; i < dezDaysList.length; i++) {
    const days = dezDaysList[i];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    dayListItem.className = 'days';

    if (days === 24 || days === 31) {
      dayListItem.className = 'day holiday';
    } else if (days === 4 || days === 11 || days === 18) {
      dayListItem.className = 'day friday';
    } else if (days === 25) {
      dayListItem.className = 'day holiday friday';
    }

    daysList.appendChild(dayListItem);
  }
}

createDecemberCalendar();

function handleHolidays(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const holidaysButton = document.createElement('button');
  holidaysButton.id = 'btn-holiday';
  holidaysButton.innerText = string;

  buttonsContainer.appendChild(holidaysButton);
}

handleHolidays('Feriados');

let newBackgroundColor = false;

function handleHolidaysBackgroundColor() {
  newBackgroundColor = true;

  const holidays = document.querySelectorAll('.holiday');

  for (i = 0; i < holidays.length; i++) {
    holidays[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}

function handleHolidaysOriginalBackgroundColor() {
  newBackgroundColor = false;

  const holidays = document.querySelectorAll('.holiday');

  for (i = 0; i < holidays.length; i++) {
    holidays[i].style.backgroundColor = 'rgb(238,238,238)';
  }
}

function handleHolidaysBackgroundColorChange() {
  newBackgroundColor = false;

  const holidaysButton = document.querySelector('#btn-holiday');

  if (newBackgroundColor === false) {
    holidaysButton.addEventListener('click', handleHolidaysBackgroundColor);
  } else if (newBackgroundColor === true) {
    holidaysButton.addEventListener('click', handleHolidaysOriginalBackgroundColor);
  }
}

handleHolidaysBackgroundColorChange();

function handleFridays(string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const fridaysButton = document.createElement('button');
  fridaysButton.id = 'btn-friday';
  fridaysButton.innerText = string;

  buttonsContainer.appendChild(fridaysButton);
}

handleFridays('Sexta-feira');

function handleFridaysText() {
  const fridays = document.querySelectorAll('.friday');

  for (i = 0; i < fridays.length; i++) {
    fridays[i].innerHTML = 'SEXTOU!';
  }
}

function handleFridaysTextChange() {
  const fridaysButton = document.querySelector('#btn-friday');

  fridaysButton.addEventListener('click', handleFridaysText);
}

handleFridaysTextChange();

function handleFontSize(event) {
  event.target.style.fontSize = '36px';
}

function handleOriginalFontSize(event) {
  event.target.style.fontSize = '20px';
}

function handleZoomText() {
  const days = document.querySelectorAll('#days');
  
  for (i = 0; i < days.length; i++) {
    days[i].addEventListener('mouseover', handleFontSize);
    days[i].addEventListener('mouseout', handleOriginalFontSize);
  }
}

handleZoomText();

function createTasks(string) {
  const div = document.querySelector('.my-tasks');
  const tasks = document.createElement('span');
  tasks.innerText = string;

  div.appendChild(tasks);
}

createTasks('lavar as roupas');

function handleTasksBackgroundColor(string) {
  const div = document.querySelector('.my-tasks');
  const divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.backgroundColor = string;

  div.appendChild(divTask);
}

handleTasksBackgroundColor('cyan');

function selectedTasks(event) {
  event.target.className = 'task selected';
}

function handleSelectedTasks() {
  const div = document.querySelector('.task');

  div.addEventListener('click', selectedTasks);
}

handleSelectedTasks();


function calendarTasks(event) {
  const selectedTask = document.querySelector('.task.selected');

  if (selectedTask === null) {
    alert('Nenhuma tarefa selecionada!');

    return;
  }

  event.target.style.backgroundColor = selectedTask.style.backgroundColor;
}

function handleCalendarTasks() {
  const day = document.querySelectorAll('.days');

  for (i = 0; i < day.length; i++) {
    day[i].addEventListener('click', calendarTasks);
  }
}

handleCalendarTasks();

function createCommitmentsList() {
  const div = document.querySelector('.input-container');
  const ul = document.createElement('ul');
  ul.className = 'commitments-list';

  div.appendChild(ul);
}

createCommitmentsList();

function addCommitmentsItems(e) {
  e.preventDefault();

  const ul = document.querySelector('.commitments-list');
  const input = document.getElementById('task-input');
  console.log(input.value)

  if (input.value === "") {
    alert('Por favor, adicione um compromisso!')

    return;
  }

  const li = document.createElement('li');
  li.className = 'commitments-item';

  li.appendChild(document.createTextNode(input.value));

  ul.appendChild(li);
}

function submitItemButton() {
  const form = document.getElementById('form-commitments');

  form.addEventListener('submit', addCommitmentsItems);
}

submitItemButton();
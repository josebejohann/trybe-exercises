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

function handleHolidaysBackgroundColor() {
  const holidays = document.querySelectorAll('.holiday');

  for (i = 0; i < holidays.length; i++) {
    holidays[i].style.backgroundColor = 'rgb(255,255,255)';
  }
}

function handleHolidaysOriginalBackgroundColor() {
  const holidays = document.querySelectorAll('.holiday');

  for (i = 0; i < holidays.length; i++) {
    holidays[i].style.backgroundColor = 'rgb(238,238,238)';
  }
}

function handleHolidaysBackgroundColorChange() {
  const holidaysButton = document.querySelector('#btn-holiday');

  holidaysButton.addEventListener('click', handleHolidaysBackgroundColor);
}

handleHolidaysBackgroundColorChange();
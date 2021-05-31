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

function fillDaysIntoCalendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDays = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const intNumberOfDay = dezDaysList[index];
    const intDayListItemCreated = document.createElement('li');
    intDayListItemCreated.innerHTML = intNumberOfDay;

    ulDays.appendChild(intDayListItemCreated);
  }  
}

fillDaysIntoCalendar();

function createHolidayButton (string) {
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerHTML = string
  const divButtons = document.querySelector('.buttons-container');
  divButtons.appendChild(buttonHoliday);
}

createHolidayButton('Feriados');

let btnHoliday = document.querySelector('#btn-holiday');

btnHoliday.addEventListener('click', function() {
    let arrHolidayDaysInDecember = [24, 25, 31];
    let arrDayElement = document.querySelectorAll('.days-container ul li');
    
    for (let day = 0; day < arrDayElement.length; day += 1) {
      let dayDecemberLi = parseInt(arrDayElement[day].innerHTML);
      for (let d = 0; d < arrHolidayDaysInDecember.length; d += 1) {
        if (dayDecemberLi == arrHolidayDaysInDecember[d]) {
          arrDayElement[day].className = 'holiday';
        }
      }
    }
    
    let arrHolidays = document.querySelectorAll('.holiday');
    
    for (let i = 0; i < arrHolidays.length; i += 1) {      
      if (arrHolidays[i].style.backgroundColor !== 'yellow') {
        arrHolidays[i].style.backgroundColor = 'yellow';
      } else {
        arrHolidays[i].style.backgroundColor = 'rgb(238,238,238)';
      }
    }
  }
)


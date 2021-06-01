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

function createFridayButton (string) {
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerHTML = string
  const divButtons = document.querySelector('.buttons-container');
  divButtons.appendChild(buttonFriday);
}

createFridayButton('Sexta-feira');

let btnFriday = document.querySelector('#btn-friday');

btnFriday.addEventListener('click', function() {
    
  let arrFridayDaysInDecember = [4, 11, 18, 25];
  let arrDayElement = document.querySelectorAll('.days-container ul li');
    
    for (let day = 0; day < arrDayElement.length; day += 1) {
      let dayDecemberLi = parseInt(arrDayElement[day].innerHTML);
      for (let d = 0; d < arrFridayDaysInDecember.length; d += 1) {
        if (dayDecemberLi == arrFridayDaysInDecember[d]) {
          arrDayElement[day].className = 'friday';
        }
      }
    }
    
    let arrHolidays = document.querySelectorAll('.friday');
    
    for (let i = 0; i < arrHolidays.length; i += 1) {      
      if (arrHolidays[i].innerHTML !== 'Sexta-feira') {
        arrHolidays[i].innerHTML = 'Sexta-feira';
      } else {
        arrHolidays[i].innerHTML = arrFridayDaysInDecember[i];
      }
    }
  }
)

function dayMouseOver() {
  let ulPai = document.querySelector('#days');  
  ulPai.addEventListener('mouseover', function(evento) {
    evento.target.style.fontSize = '30px';
    evento.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};

dayMouseOver();
dayMouseOut();

function createTask(string) {
  let task = document.createElement('span');
  task.innerHTML = string
  let getDivMyTasks = document.getElementsByClassName('my-tasks');
  getDivMyTasks[0].appendChild(task)
}

function createLegendDivTask(string) {
  let elementDiv = document.createElement('div');
  elementDiv.className = 'task';
  elementDiv.style.backgroundColor = string;

  let getDivMyTasks = document.querySelector('.my-tasks');
  getDivMyTasks.appendChild(elementDiv);
}

createTask('Terminar os exercicios do bloco 5.3');
createLegendDivTask('red');

let divSelected = document.querySelector('.task');

divSelected.addEventListener('click', function(event) {
  if (event.target.className == 'task-selected') {
    event.target.className = 'task';
  } else {
    event.target.className = 'task-selected'
  }
  // 
});

divSelected.addEventListener('click', function(event) {
  let strColorSelected = event.target.style.backgroundColor
  sessionStorage.setItem('Selected Color', strColorSelected)
})

function dayChangeColor() {   
  let days = document.querySelector('#days');  
  days.addEventListener('click', function(event) {
    let SelectedColor = sessionStorage.getItem('Selected Color');
    if (event.target.style.color == SelectedColor) {
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      event.target.style.color = SelectedColor;    
    }    
  })
};

dayChangeColor();

function addTask() {   
  let strTextInput = document.querySelector('#task-input').value; //Seleciona o texto na tag input
  if (strTextInput == '') {
    document.alert('Error: task input empty');
  } else {
    let taskListElement = document.createElement('li');
    taskListElement.innerHTML = strTextInput;
    taskListElement.style.listStyle = 'none'
    taskListElement.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
    taskListElement.style.fontSize = '20px';
    taskListElement.style.fontWeight = '200';
    taskListElement.style.Color = '#666';
    let divForTaskList = document.querySelector('.task-list-container');
    divForTaskList.appendChild(taskListElement);    
  }
}

let btnAddTask = document.querySelector('#btn-add');
btnAddTask.addEventListener('click', addTask);

let inputField = document.querySelector('#task-input');
inputField.addEventListener('keyup', function(event) {
  let key = event.keyCode;
  if (key == '13') {
    addTask();
  }
});
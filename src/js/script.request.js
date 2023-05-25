function showTab(tabName) {
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }
  document.getElementsByClassName(tabName)[0].style.display = 'block';
}

function nextTab(nextTabName) {
  // Получаем текущую вкладку
  var currentTab = document.querySelector('.tab:not([style="display: none;"])');

  // Проверяем все поля в текущей вкладке
  var inputs = currentTab.querySelectorAll('input, select');
  var isAllFieldsFilled = true;

  inputs.forEach(function(input) {  
    
    if (!input.value) {
      isAllFieldsFilled = false;
    }
  });

  // Если все поля заполнены, переходим на следующую вкладку
  if (isAllFieldsFilled) {
    showTab(nextTabName);
  } else {
    alert('Пожалуйста, заполните все поля перед переходом на следующую вкладку.');
  }
}

document.getElementById('tourForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Получение данных из всех трёх вкладок и их обработка
  // ...

  // Вывод данных в нужное место на странице или отправка на сервер
  // ...
});

// Показываем первую вкладку при загрузке страницы
showTab('base');


////////var2

// function showTab(tabName) {
//   var tabs = document.getElementsByClassName('tab');
//   for (var i = 0; i < tabs.length; i++) {
//     tabs[i].style.display = 'none';
//   }
//   document.getElementsByClassName(tabName)[0].style.display = 'block';
// }

// function nextTab(nextTabName) {
//   // Проверка на валидность и заполненность полей текущей вкладки
//   // ...

//   // Переход на следующую вкладку
//   showTab(nextTabName);

//   // Делаем только активную вкладку кликабельной, а остальные - нет
//   var tabTitles = document.getElementsByClassName('tab-title');
//   for (var i = 0; i < tabTitles.length; i++) {
//     tabTitles[i].onclick = null;
//   }
//   document.querySelector('.tab-title.' + nextTabName).onclick = function() {
//     showTab(nextTabName);
//   };
// }

// document.getElementById('tourForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Получение данных из всех трёх вкладок и их обработка
//   // ...

//   // Вывод данных в нужное место на странице или отправка на сервер
//   // ...
// });

// // Показываем первую вкладку при загрузке страницы
// showTab('base');
////////////////////////////



// var activeTab = 'base'; // Идентификатор активной вкладки
// var allowTabSwitching = false; // Разрешение перехода между вкладками

// function showTab(tabName) {
//   var tabs = document.querySelectorAll('.tab');
//   for (var i = 0; i < tabs.length; i++) {
//     tabs[i].style.display = 'none';
//   }
//   document.querySelector('.' + tabName).style.display = 'block';
// }

// function nextTab(nextTabName) {
//   // Проверка на валидность и заполненность полей текущей вкладки
//   // ...

//   // Разрешение перехода между вкладками
//   allowTabSwitching = true;

//   // Переход на следующую вкладку
//   showTab(nextTabName);
//   activeTab = nextTabName;

//   // Сохранение данных в localStorage
//   var form = document.getElementById('tourForm');
//   var formData = new FormData(form);
//   for (var pair of formData.entries()) {
//     localStorage.setItem(pair[0], pair[1]);
//   }
// }

// function switchTab(tabName) {
//   if (allowTabSwitching) {
//     showTab(tabName);
//     activeTab = tabName;
//   }
// }

// document.getElementById('tourForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Получение данных из всех трёх вкладок и их обработка
//   // ...

//   // Вывод данных в нужное место на странице или отправка на сервер
//   // ...

//   // Очистка данных из localStorage
//   localStorage.clear();
// });

// // Показываем первую вкладку при загрузке страницы
// showTab(activeTab);

// // Обработка клика на названиях вкладок
// var tabTitles = document.getElementsByClassName('tab-title');
// for (var i = 0; i < tabTitles.length; i++) {
//   tabTitles[i].addEventListener('click', function() {
//     var tabName = this.getAttribute('data-tab');
//     switchTab(tabName);
//   });
// }

// // Запрет перехода по вкладкам, если кнопка "ДАЛЬШЕ" не была нажата
// var tabLinks = document.querySelectorAll('.tab-title');
// for (var i = 0; i < tabLinks.length; i++) {
//   tabLinks[i].addEventListener('click', function(e) {
//     if (!allowTabSwitching) {
//       e.preventDefault();
//     }
//   });
// }

// document.getElementById('tourForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Получение данных из всех трёх вкладок и их обработка
//   // ...

//   // Сохранение данных в localStorage
//   var formInputs = document.querySelectorAll('#tourForm input, #tourForm select, #tourForm textarea');

//   formInputs.forEach(function(input) {
//     localStorage.setItem(input.name, input.value);
//   });

//   // Вывод данных в нужное место на странице или отправка на сервер
//   // ...

//   // Переход на следующую страницу или выполнение других действий
//   // ...
// });






////////////////////
document.getElementById('tourForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Получение данных из всех трех вкладок
  var baseTabInputs = document.querySelectorAll('.tab.base input, .tab.base select');
  var preferencesTabInputs = document.querySelectorAll('.tab.preferences input, .tab.preferences select');
  var contactsTabInputs = document.querySelectorAll('.tab.contacts input, .tab.contacts select, .tab.contacts textarea');

  // Создание объекта для хранения данных
  var formData = {
    base: {},
    preferences: {},
    contacts: {}
  };

  // Получение данных из вкладки "Основное"
  baseTabInputs.forEach(function(input) {
    formData.base[input.name] = input.value;
  });

  // Получение данных из вкладки "Предпочтения"
  preferencesTabInputs.forEach(function(input) {
    formData.preferences[input.name] = input.value;
  });

  // Получение данных из вкладки "Контакты"
  contactsTabInputs.forEach(function(input) {
    formData.contacts[input.name] = input.value;
  });

  // Сохранение данных в localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Вывод данных в нужное место на странице или отправка на сервер
  // ...

  // Переход на следующую вкладку (если необходимо)
  nextTab('contacts');
});
function showTab(tabName) {
  var tabs = document.getElementsByClassName('tab');
  var tabTitles = document.getElementsByClassName('tab-title');

  // Скрываем все вкладки и удаляем класс 'active' у названий вкладок
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
    tabTitles[i].classList.remove('active');
  }

  // Показываем выбранную вкладку и добавляем класс 'active' к соответствующему названию вкладки
  document.getElementsByClassName(tabName)[0].style.display = 'flex';
  document.querySelector('.tab-title[data-tab="' + tabName + '"]').classList.add('active');
}


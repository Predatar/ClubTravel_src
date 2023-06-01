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

  inputs.forEach(function (input) {
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

document.getElementById('tourForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Получение данных из всех трёх вкладок и их обработка
  // ...

  // Вывод данных в нужное место на странице или отправка на сервер
  // ...
});

// Показываем первую вкладку при загрузке страницы
showTab('base');

document.getElementById('tourForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Получение данных из всех трех вкладок
  var baseTabInputs = document.querySelectorAll('.tab.base input, .tab.base select');
  var preferencesTabInputs = document.querySelectorAll('.tab.preferences input, .tab.preferences select');
  var contactsTabInputs = document.querySelectorAll(
    '.tab.contacts input, .tab.contacts select, .tab.contacts textarea'
  );

  // Создание объекта для хранения данных
  var formData = {
    base: {},
    preferences: {},
    contacts: {}
  };

  // Получение данных из вкладки "Основное"
  baseTabInputs.forEach(function (input) {
    formData.base[input.name] = input.value;
  });

  // Получение данных из вкладки "Предпочтения"
  preferencesTabInputs.forEach(function (input) {
    formData.preferences[input.name] = input.value;
  });

  // Получение данных из вкладки "Контакты"
  contactsTabInputs.forEach(function (input) {
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

document.addEventListener('DOMContentLoaded', () => {
  const decBtn = document.querySelector('.decrement-button');
  const incBtn = document.querySelector('.increment-button');
  const inputField = document.querySelector('.input-field');

  decBtn.addEventListener('click', event => {
    if (inputField.value > 0) {
      inputField.value = -1 + +inputField.value;
    }
  });

  incBtn.addEventListener('click', () => {
    inputField.value = 1 + +inputField.value;
  });

  const guestModal = document.querySelector('.guest__modal');
  const guestSelect = document.querySelectorAll('.guest__select');
  const guestSelected = document.querySelectorAll('.guest__selected');
  const guestList = document.querySelectorAll('.guest__list');
  const guestListItem = document.querySelectorAll('.guest__list-item');
  const guestMinus = document.querySelectorAll('.guest__count .icon-minus-circle');
  const guestPlus = document.querySelectorAll('.guest__count .icon-plus-circle');
  const guestCount = document.querySelectorAll('.guest__count-wrapper');
  const guestAddBtn = document.querySelector('.guest__btn-add');

  const guestRow = document.getElementsByClassName('guest__form-row');
  const guestRowClose = document.getElementsByClassName('guest__delete');

  document.querySelector('.searchBar__guests-selected').addEventListener('click', () => {
    guestModal.classList.toggle('guest__modal_active');

    if (!guestModal.classList.contains('guest__modal_active')) {
      guestList.forEach(elem => {
        elem.classList.contains('guest__list_active') ? elem.classList.remove('guest__list_active') : null;
      });
    }
  });

  guestSelect.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      if (guestList[index].classList.contains('guest__list_active')) {
        guestList.forEach(elem => {
          elem.classList.contains('guest__list_active') ? elem.classList.remove('guest__list_active') : null;
        });
      } else {
        guestList[index].classList.add('guest__list_active');
      }
    });
  });

  guestList.forEach((elem, index) => {
    elem.addEventListener('click', ({ target }) => {
      console.log(target);
      guestListItem.forEach(elem => {
        elem.classList.contains('guest__list-item_active') ? elem.classList.remove('guest__list-item_active') : null;
      });
      target.classList.add('guest__list-item_active');

      guestSelected[index].childNodes[0].textContent = target.innerHTML;
    });
  });

  guestMinus.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      guestCount[index].innerHTML = -1 + +guestCount[index].innerHTML;
    });
  });
  guestPlus.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      guestCount[index].innerHTML = 1 + +guestCount[index].innerHTML;
    });
  });

  /* guestRowClose.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      guestRow[++index].remove();
    });
  }); */

  for (let i = 0; i < guestRowClose.length; i++) {
    guestRowClose[i].addEventListener('click', () => {
      guestRow[++i].remove();
    });
  }

  guestAddBtn.addEventListener('click', () => {
    document.querySelector('.guest__form').innerHTML += /* html */ `<div class="guest__form-row">
    <div class="guest__select">
      <div class="guest__selected">
        Взрослый
        <span class="icon-chevron-down"></span>
      </div>
      <div class="guest__list">
        <div class="guest__list-item guest__list-item_active">
          Взрослый
        </div>
      </div>
    </div>
    <div class="guest__count guest__count_addition">
      <span class="icon-minus-circle"></span>
      <div class="guest__count-wrapper">
        1
      </div>
      <span class="icon-plus-circle"></span>
    </div>
    <div class="guest__delete">
      <span class="icon-close"></span>
    </div>
  </div>`;

    for (let i = 0; i < guestRowClose.length; i++) {
      guestRowClose[i].addEventListener('click', () => {
        guestRow[++i].remove();
      });
    }

    console.log(guestRow);
  });
});

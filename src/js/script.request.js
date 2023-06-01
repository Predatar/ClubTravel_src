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
  const guestMinus = document.querySelector('.guest__count .icon-minus-circle');
  const guestPlus = document.querySelector('.guest__count .icon-plus-circle');
  const guestCount = document.querySelector('.guest__count-wrapper');
  const guestAddBtn = document.querySelector('.guest__btn-add');

  document.querySelector('.searchBar__guests-selected').addEventListener('click', () => {
    guestModal.classList.toggle('guest__modal_active');

    if (!guestModal.classList.contains('guest__modal_active')) {
      guestList.forEach(elem => {
        elem.classList.contains('guest__list_active') ? elem.classList.remove('guest__list_active') : null;
      });
    }
  });

  guestMinus.addEventListener('click', () => {
    if (guestCount.innerHTML > 0) {
      guestCount.innerHTML = -1 + +guestCount.innerHTML;
    }
  });

  guestPlus.addEventListener('click', () => {
    guestCount.innerHTML = 1 + +guestCount.innerHTML;
  });

  guestAddBtn.addEventListener('click', () => {
    const guestForm = document.querySelector('.guest__form');

    const guestFormRow = document.createElement('div');
    guestFormRow.classList.add('guest__form-row');

    const guestAddSelect = document.createElement('div');
    guestAddSelect.classList.add('guest__select');
    guestAddSelect.addEventListener('click', () => {
      guestAddSelect.childNodes[1].classList.toggle('guest__list_active');
    });

    const guestAddSelected = document.createElement('div');
    guestAddSelected.classList.add('guest__selected');
    guestAddSelected.innerHTML = 'Взрослый<span class="icon-chevron-down"></span>';

    const guestAddList = document.createElement('div');
    guestAddList.classList.add('guest__list');
    guestAddList.innerHTML = /* html */ `<div class="guest__list-item guest__list-item_active">
      Взрослый
      </div><div class="guest__list-item">
      15 лет
      </div><div class="guest__list-item">
      12 лет
      </div>`;
    guestAddList.addEventListener('click', ({ target }) => {
      if (target.classList.contains('guest__list-item')) {
        target.parentNode.childNodes.forEach(elem => {
          elem.classList.remove('guest__list-item_active');
        });
        target.classList.add('guest__list-item_active');

        target.parentNode.parentNode.childNodes[0].childNodes[0].textContent = target.innerHTML;
      }
    });

    const guestAddCount = document.createElement('div');
    guestAddCount.classList.add('guest__count', 'guest__count_addition');

    const iconMinus = document.createElement('span');
    iconMinus.classList.add('icon-minus-circle');
    iconMinus.addEventListener('click', () => {
      if (iconMinus.parentNode.childNodes[1].innerHTML > 0) {
        iconMinus.parentNode.childNodes[1].innerHTML = -1 + +iconMinus.parentNode.childNodes[1].innerHTML;
      }
    });
    
    const iconPlus = document.createElement('span');
    iconPlus.classList.add('icon-plus-circle');
    iconPlus.addEventListener('click', () => {
      iconPlus.parentNode.childNodes[1].innerHTML = 1 + +iconPlus.parentNode.childNodes[1].innerHTML;
    });

    const guestCountWrapper = document.createElement('div');
    guestCountWrapper.classList.add('guest__count-wrapper');
    guestCountWrapper.innerHTML = '1';

    guestAddCount.appendChild(iconMinus);
    guestAddCount.appendChild(guestCountWrapper);
    guestAddCount.appendChild(iconPlus);

    const guestDelete = document.createElement('div');
    guestDelete.classList.add('guest__delete');

    const iconClose = document.createElement('span');
    iconClose.classList.add('icon-close');
    iconClose.addEventListener('click', ({ target }) => {
      console.log(target.parentNode.parentNode.remove());
    });

    guestDelete.appendChild(iconClose);

    guestAddSelect.appendChild(guestAddSelected);
    guestAddSelect.appendChild(guestAddList);

    guestFormRow.appendChild(guestAddSelect);
    guestFormRow.appendChild(guestAddCount);
    guestFormRow.appendChild(guestDelete);

    guestForm.appendChild(guestFormRow);
  });
});

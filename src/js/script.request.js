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

  const searchBarGuestsSelected = document.querySelector('.searchBar__guests-selected');
  const filter = document.getElementsByClassName('filter');
  const filterNode = document.querySelector('.filter');

  const updateSearchBarGuestsSelected = () => {
    const strFilter = filter[0].children;

    let adultCounter = 0,
      childCounter = 0;

    console.log(strFilter);

    for (let i = 0; i < strFilter.length; i++) {
      if (strFilter[i].innerHTML.split(' ')[0] == 'Взрослых') {
        adultCounter += +strFilter[i].innerHTML.split(' ')[1].split('')[1];
      } else {
        console.log(strFilter[i].innerHTML);
        let word = strFilter[i].innerHTML.trim().split(' ');
        word = word[word.length - 1].split('');
        childCounter += +word[1];
      }
    }

    if (childCounter != 0) {
      searchBarGuestsSelected.childNodes[0].textContent = `Взрослых: ${adultCounter}; детей: ${childCounter}`;
    } else {
      searchBarGuestsSelected.childNodes[0].textContent = `Взрослых: ${adultCounter}`;
    }
  };

  const updateFilter = ({ elem, countGuest }) => {
    if (elem != undefined) {
      for (let i = 0; i < filter[0].children.length; i++) {
        if (
          filter[0].children[i].getAttribute('data-filter') ==
          elem.parentNode.parentNode.parentNode.getAttribute('data-filter')
        ) {
          filter[0].children[
            i
          ].childNodes[0].textContent = `${elem.innerHTML} x${elem.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].innerHTML}`;
        }
      }
    }
    if (countGuest != undefined) {
      for (let i = 0; i < filter[0].children.length; i++) {
        if (
          filter[0].children[i].getAttribute('data-filter') ==
          countGuest.parentNode.parentNode.getAttribute('data-filter')
        ) {
          const str = filter[0].children[i].childNodes[0].textContent;

          console.log(str.trim().split(' '));

          const strTitle =
            str.trim().split(' ')[1] != ''
              ? str.trim().split(' ')[0] + ' ' + str.trim().split(' ')[1]
              : str.trim().split(' ')[0];

          filter[0].children[i].childNodes[0].textContent = `${strTitle} x${countGuest.innerHTML}`;

          updateSearchBarGuestsSelected();
        }
      }
    }
  };

  const updateOldFilter = elem => {
    const str = filter[0].children[0];

    filter[0].children[0].innerHTML = str.innerHTML.split(' ')[0] + ' x' + elem.innerHTML;

    updateSearchBarGuestsSelected();
  };

  guestMinus.addEventListener('click', () => {
    if (guestCount.innerHTML > 0) {
      guestCount.innerHTML = -1 + +guestCount.innerHTML;
      updateOldFilter(guestCount);
    }
  });

  guestPlus.addEventListener('click', () => {
    guestCount.innerHTML = 1 + +guestCount.innerHTML;
    updateOldFilter(guestCount);
  });

  let indexFilter = 1;

  guestAddBtn.addEventListener('click', () => {
    const guestForm = document.querySelector('.guest__form');

    const guestFormRow = document.createElement('div');
    guestFormRow.classList.add('guest__form-row');
    guestFormRow.setAttribute('data-filter', indexFilter);

    const guestAddSelect = document.createElement('div');
    guestAddSelect.classList.add('guest__select');
    guestAddSelect.addEventListener('click', () => {
      guestAddSelect.childNodes[1].classList.toggle('guest__list_active');
    });

    const guestAddSelected = document.createElement('div');
    guestAddSelected.classList.add('guest__selected');
    guestAddSelected.innerHTML = 'Взрослый<span class="icon-chevron-down"></span>';

    const deleteFiter = elem => {
      for (let i = 0; i < filter[0].children.length; i++) {
        if (
          filter[0].children[i].getAttribute('data-filter') == elem.parentNode.parentNode.getAttribute('data-filter')
        ) {
          filter[0].children[i].remove();
        }
      }
    };

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

        updateFilter({ elem: target });
        updateSearchBarGuestsSelected();
      }
    });

    const guestAddCount = document.createElement('div');
    guestAddCount.classList.add('guest__count', 'guest__count_addition');

    const iconMinus = document.createElement('span');
    iconMinus.classList.add('icon-minus-circle');
    iconMinus.addEventListener('click', () => {
      if (iconMinus.parentNode.childNodes[1].innerHTML > 0) {
        iconMinus.parentNode.childNodes[1].innerHTML = -1 + +iconMinus.parentNode.childNodes[1].innerHTML;

        updateFilter({ countGuest: iconMinus.parentNode.childNodes[1] });
      }
    });

    const iconPlus = document.createElement('span');
    iconPlus.classList.add('icon-plus-circle');
    iconPlus.addEventListener('click', () => {
      iconPlus.parentNode.childNodes[1].innerHTML = 1 + +iconPlus.parentNode.childNodes[1].innerHTML;

      updateFilter({ countGuest: iconPlus.parentNode.childNodes[1] });
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
      target.parentNode.parentNode.remove();
      deleteFiter(target);
      updateSearchBarGuestsSelected();
    });

    guestDelete.appendChild(iconClose);

    guestAddSelect.appendChild(guestAddSelected);
    guestAddSelect.appendChild(guestAddList);

    guestFormRow.appendChild(guestAddSelect);
    guestFormRow.appendChild(guestAddCount);
    guestFormRow.appendChild(guestDelete);

    guestForm.appendChild(guestFormRow);

    const filterItem = document.createElement('div');
    filterItem.classList.add('filter__item');
    filterItem.setAttribute('data-filter', indexFilter);

    let word = guestAddSelect.childNodes[1].childNodes[0].innerHTML.trim();

    word = word.split('');
    word.pop();
    word.push('х');
    word = word.join('');

    filterItem.innerHTML = word + ' x1';

    filterNode.appendChild(filterItem);

    updateSearchBarGuestsSelected();

    indexFilter++;
  });

  const stars = document.querySelectorAll('.advancedSearch__star .icon-star');

  stars.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      stars.forEach(elem => {
        elem.classList.contains('icon-star_active') ? elem.classList.remove('icon-star_active') : null;
      });
      for (let i = 0; i < elem.getAttribute('data-index'); i++) {
        stars[i].classList.add('icon-star_active');
      }
    });
  });
});

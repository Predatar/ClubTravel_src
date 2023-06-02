document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true // Для бесконечной прокрутки слайдов
  });
});

var swiperPrevButton = document.querySelector('.swiper-button-prev');
var swiperNextButton = document.querySelector('.swiper-button-next');

swiperPrevButton.style.backgroundImage = 'url("@img/hotel/Group 940.png")';

swiperNextButton.style.backgroundImage = 'url("@img/hotel/Group 941.png")';

swiperPrevButton.addEventListener('click', function () {
  swiper.slidePrev();
});

swiperNextButton.addEventListener('click', function () {
  swiper.slideNext();
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
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

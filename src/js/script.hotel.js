document.addEventListener("DOMContentLoaded", function() {
  // Ваш JavaScript код с использованием Swiper
  var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Для бесконечной прокрутки слайдов
  });
});


var swiperPrevButton = document.querySelector('.swiper-button-prev');
var swiperNextButton = document.querySelector('.swiper-button-next');

// Установите фоновое изображение для кнопки "Prev"
swiperPrevButton.style.backgroundImage = 'url("@img/hotel/Group 940.png")';

// Установите фоновое изображение для кнопки "Next"
swiperNextButton.style.backgroundImage = 'url("@img/hotel/Group 941.png")';

// Добавьте обработчики событий для кнопок "Prev" и "Next"  
swiperPrevButton.addEventListener('click', function () {
  swiper.slidePrev();
});

swiperNextButton.addEventListener('click', function () {
  swiper.slideNext();
});

  document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.slider', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
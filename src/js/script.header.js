document.addEventListener('DOMContentLoaded', () => {
    try {
        const headerSwiper = new Swiper('.header__slider', {
            enabled: false,
            grabCursor: true,
            navigation: {
                nextEl: '.header-button-next',
                prevEl: '.header-button-prev'
            },
            breakpoints: {
                769: {
                    enabled: true
                }
            }
        });
    } catch (error) {
        /* 
        console.log(error); */
    }

    const headerItem = document.querySelectorAll('.header__nav-item');
    const switchHeaderItemActiveClass = page => {
        headerItem.forEach(elem => {
            elem.classList.contains('header__nav-item_active')
                ? elem.classList.remove('header__nav-item_active')
                : null;
        });
        try {
            headerItem[page].classList.add('header__nav-item_active');
        } catch (error) {
            /* 
            console.log(error); */
        }
    };
    const pageCheck = () => {
        const page = document.body.getAttribute('data-page');

        switch (page) {
            case 'search':
                return 0;
            case 'destination':
                return 1;
            default:
                console.log('default');
                break;
        }
    };
    switchHeaderItemActiveClass(pageCheck());

    const burger = document.querySelector('.burger');
    const sidemenu = document.querySelector('.sidebar');

    burger.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        sidemenu.classList.add('sidebar_active');
    });

    const authLink = document.querySelector('.header__personal');

    var swiperPrevButton = document.querySelector('.swiper-button-prev');
    var swiperNextButton = document.querySelector('.swiper-button-next');
    
    // Установите фоновое изображение для кнопки "Prev"
    swiperPrevButton.style.backgroundImage = 'url("путь_к_изображению_предыдущей_кнопки")';
    
    // Установите фоновое изображение для кнопки "Next"
    swiperNextButton.style.backgroundImage = 'url("путь_к_изображению_следующей_кнопки")';
    
    // Добавьте обработчики событий для кнопок "Prev" и "Next"
    swiperPrevButton.addEventListener('click', function () {
      swiper.slidePrev();
    });
    
    swiperNextButton.addEventListener('click', function () {
      swiper.slideNext();
    });
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
            case 'compaines':
                return 2;
            case 'hot-deals':
                return 3;
            case 'request':
                return 4;
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

    const isLogin = () => {
        if (localStorage.getItem('isLogin')) {
            authLink.setAttribute('href', 'personal-cabinet.html');
        } else {
            authLink.setAttribute('href', 'authorisation.html');
        }
    };

    isLogin();
});

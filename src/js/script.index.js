document.addEventListener('DOMContentLoaded', () => {
    // * SWIPER

    const newsSwiper = new Swiper('.news__swiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.news__btn-next',
            prevEl: '.news__btn-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 27,
                grabCursor: true
            }
        }
    });
    const hotOfferSwiper = new Swiper('.hot-offer__swiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.hot-offer__btn-next',
            prevEl: '.hot-offer__btn-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 'auto',
                spaceBetween: 26,
                grabCursor: true
            }
        }
    });
    const winterSwiper = new Swiper('.winter__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true, 
        navigation: {
            nextEl: '.winter__btn-next',
            prevEl: '.winter__btn-prev'
        },
        breakpoints: {
            1365: {
                enabled: false
            }
        }
    })
    const summerSwiper = new Swiper('.summer__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20, 
        navigation: {
            nextEl: '.summer__btn-next',
            prevEl: '.summer__btn-prev'
        },
        breakpoints: {
            1024: {
                enabled: false
            }
        }
    })
});

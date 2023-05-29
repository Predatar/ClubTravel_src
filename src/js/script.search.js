document.addEventListener('DOMContentLoaded', () => {
    const hotelCard = document.querySelectorAll('.hotel__card');
    const cardBtn = document.querySelectorAll('.hotel__card-btn');
    const hotelWrapper1 = document.querySelectorAll('.hotel__wrapper1');
    const hotelWrapper2 = document.querySelectorAll('.hotel__wrapper2');

    const openDropDownMenu = index => {
        hotelCard[index].classList.toggle('hotel__card_active');
        cardBtn[index].classList.toggle('hotel__card-btn_active');

        cardBtn[index].classList.contains('hotel__card-btn_active')
            ? (cardBtn[index].innerHTML = 'Закрыть')
            : (cardBtn[index].innerHTML = 'Открыть');

        hotelWrapper1[index].classList.toggle('hotel__wrapper1_active');
        hotelWrapper2[index].classList.toggle('hotel__wrapper2_active');
    };

    cardBtn.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            openDropDownMenu(index);
        });
    });

});

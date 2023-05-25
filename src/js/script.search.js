document.addEventListener('DOMContentLoaded', () => {
    const hotelCard = document.querySelector('.hotel__card');
    const cardBtn = document.querySelector('.hotel__card-btn');
    const hotelWrapper1 = document.querySelector('.hotel__wrapper1');
    const hotelWrapper2 = document.querySelector('.hotel__wrapper2');

    cardBtn.addEventListener('click', () => {
        hotelCard.classList.toggle('hotel__card_active');
        cardBtn.classList.toggle('hotel__card-btn_active');

        cardBtn.classList.contains('hotel__card-btn_active')
            ? (cardBtn.innerHTML = 'Закрыть')
            : (cardBtn.innerHTML = 'Открыть');

        hotelWrapper1.classList.toggle('hotel__wrapper1_active');
        hotelWrapper2.classList.toggle('hotel__wrapper2_active');
    });
});

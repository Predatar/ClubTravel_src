document.addEventListener('DOMContentLoaded', () => {
    const checkList = document.querySelectorAll('.aside__check');

    const addActiveClassToCheck = index => {
        if (index == 0) {
            checkList.forEach(elem => {
                elem.classList.contains('aside__check_active') ? elem.classList.remove('aside__check_active') : null;

                checkList[index].classList.add('aside__check_active');
            });
        } else {
            checkList[0].classList.contains('aside__check_active')
                ? checkList[0].classList.remove('aside__check_active')
                : null;
            checkList[index].classList.toggle('aside__check_active');
        }
    };

    checkList.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            addActiveClassToCheck(index);
        });
    });
});

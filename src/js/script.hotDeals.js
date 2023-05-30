document.addEventListener('DOMContentLoaded', () => {
  const hotDealsRow = document.querySelectorAll('.hotDeals__body-row');
  const hotDealsBtn = document.querySelectorAll('.hotDeals__body-btn');

  const hotDealsAddition = document.querySelectorAll('.hotDeals__addition');
  const hotDealsAdditionRow = document.querySelectorAll('.hotDeals__addition-body-row');
  const hotDealsAdditionDropDown = document.querySelectorAll('.hotDeals__addition-body-dropdown');
  const hotDealsDropDown = document.querySelectorAll('.hotDeals__dropdown');

  const toggleActiveClassForHotDealsRow = index => {
    if (!hotDealsRow[index].classList.contains('hotDeals__body-row_active')) {
      hotDealsRow.forEach(elem => {
        elem.classList.contains('hotDeals__body-row_active')
          ? elem.classList.remove('hotDeals__body-row_active')
          : null;
      });

      hotDealsRow[index].classList.add('hotDeals__body-row_active');
    } else {
      hotDealsRow[index].classList.remove('hotDeals__body-row_active');
    }
  };

  const toggleActiveClassForHotDealsBtn = index => {
    if (!hotDealsBtn[index].classList.contains('hotDeals__body-btn_active')) {
      hotDealsBtn.forEach(elem => {
        elem.classList.contains('hotDeals__body-btn_active')
          ? elem.classList.remove('hotDeals__body-btn_active')
          : null;
        elem.innerHTML = 'Открыть';
      });

      hotDealsBtn[index].classList.add('hotDeals__body-btn_active');
      hotDealsBtn[index].innerHTML = 'закрыть';
    } else {
      hotDealsBtn[index].classList.remove('hotDeals__body-btn_active');
      hotDealsBtn[index].innerHTML = 'Открыть';
    }
  };

  const toggleActiveClassForHotDealsAddition = index => {
    if (!hotDealsAddition[index].classList.contains('hotDeals__addition_active')) {
      hotDealsAddition.forEach(elem => {
        elem.classList.contains('hotDeals__addition_active')
          ? elem.classList.remove('hotDeals__addition_active')
          : null;
      });

      hotDealsAddition[index].classList.add('hotDeals__addition_active');
    } else {
      hotDealsAddition[index].classList.remove('hotDeals__addition_active');
    }
  };

  hotDealsBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      toggleActiveClassForHotDealsRow(index);
      toggleActiveClassForHotDealsBtn(index);
      toggleActiveClassForHotDealsAddition(index);
    });
  });

  const toggleActiveClassForHotDealsAdditionDropDown = index => {
    if (!hotDealsAdditionDropDown[index].classList.contains('hotDeals__addition-body-dropdown_active')) {
      hotDealsAdditionDropDown.forEach(elem => {
        elem.classList.contains('hotDeals__addition-body-dropdown_active')
          ? elem.classList.remove('hotDeals__addition-body-dropdown_active')
          : null;

        elem.childNodes[0].textContent = 'открыть предложения';
      });

      hotDealsAdditionDropDown[index].classList.add('hotDeals__addition-body-dropdown_active');
      hotDealsAdditionDropDown[index].childNodes[0].textContent = 'скрыть предложения';
    } else {
      hotDealsAdditionDropDown[index].classList.remove('hotDeals__addition-body-dropdown_active');
      hotDealsAdditionDropDown[index].childNodes[0].textContent = 'открыть предложения';
    }
  };

  const toggleActiveClassForHotDealsAdditionRow = index => {
    if (
      !hotDealsAdditionDropDown[index].parentNode.parentNode.classList.contains('hotDeals__addition-body-row_active')
    ) {
      hotDealsAdditionRow.forEach(elem => {
        elem.classList.contains('hotDeals__addition-body-row_active')
          ? elem.classList.remove('hotDeals__addition-body-row_active')
          : null;
      });
      hotDealsAdditionDropDown[index].parentNode.parentNode.classList.add('hotDeals__addition-body-row_active');
      console.log('add');
    } else {
      hotDealsAdditionDropDown[index].parentNode.parentNode.classList.remove('hotDeals__addition-body-row_active');
      console.log('remove');
    }
  };

  const toggleActiveClassForHotDealsDropDown = index => {
    if (!hotDealsDropDown[index].classList.contains('hotDeals__dropdown_active')) {
      hotDealsDropDown.forEach(elem => {
        elem.classList.contains('hotDeals__dropdown_active')
          ? elem.classList.remove('hotDeals__dropdown_active')
          : null;
      });
      hotDealsDropDown[index].classList.add('hotDeals__dropdown_active');
    } else {
      hotDealsDropDown[index].classList.remove('hotDeals__dropdown_active');
    }
  };

  hotDealsAdditionDropDown.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      toggleActiveClassForHotDealsAdditionDropDown(index);
      toggleActiveClassForHotDealsAdditionRow(index);
      toggleActiveClassForHotDealsDropDown(index);
    });
  });
});

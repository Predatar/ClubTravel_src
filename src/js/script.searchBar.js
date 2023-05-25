document.addEventListener('DOMContentLoaded', () => {
    // * SEARCH

    const direction = document.querySelector('.searchBar__direction');
    const directionSelected = document.querySelector('.searchBar__direction-selected');
    const directionGroup = document.querySelector('.searchBar__direction-group');
    const directionItem = document.querySelectorAll('.searchBar__direction-item');
    const duration = document.querySelector('.searchBar__duration');
    const durationSelected = document.querySelector('.searchBar__duration-selected');
    const durationGroup = document.querySelector('.searchBar__duration-group');
    const durationItem = document.querySelectorAll('.searchBar__duration-item');
    const guests = document.querySelector('.searchBar__guests');
    const guestsSelected = document.querySelector('.searchBar__guests-selected');
    const guestsGroup = document.querySelector('.searchBar__guests-group');
    const guestsItemAdult = document.querySelectorAll('.searchBar__guests-item[data-adults]');
    const guestsItemChild = document.querySelectorAll('.searchBar__guests-item[data-child]');

    const switchDirectionItem = index => {
        directionItem.forEach(elem => {
            elem.classList.contains('searchBar__direction-item_active')
                ? elem.classList.remove('searchBar__direction-item_active')
                : null;
        });
        directionItem[index].classList.add('searchBar__direction-item_active');
        directionSelected.childNodes[0].textContent = directionItem[index].innerHTML;
    };
    const switchDurationItem = index => {
        durationItem.forEach(elem => {
            elem.classList.contains('searchBar__duration-item_active')
                ? elem.classList.remove('searchBar__duration-item_active')
                : null;
        });
        durationItem[index].classList.add('searchBar__duration-item_active');
        durationSelected.childNodes[0].textContent = durationItem[index].innerHTML;
    };

    direction.addEventListener('click', () => {
        direction.classList.toggle('searchBar__direction-selected_active');
        directionGroup.classList.toggle('searchBar__direction-group_active');
    });

    directionItem.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            switchDirectionItem(index);
        });
    });

    duration.addEventListener('click', () => {
        duration.classList.toggle('searchBar__duration-selected_active');
        durationGroup.classList.toggle('searchBar__duration-group_active');
    });

    durationItem.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            switchDurationItem(index);
        });
    });

    guests.addEventListener('click', () => {
        guests.classList.toggle('searchBar__guests-selected_active');
        guestsGroup.classList.toggle('searchBar__guests-group_active');
    });

    const removeActiveClassFromGuestsItem = items => {
        items.forEach(elem => {
            elem.classList.contains('searchBar__guests-item_active')
                ? elem.classList.remove('searchBar__guests-item_active')
                : null;
        });
    };

    guestsItemAdult.forEach(elem => {
        elem.addEventListener('click', () => {
            const str = guestsSelected.innerHTML.split(' ');
            str[1] = `${elem.innerHTML.split(' ')[0]};`;
            guestsSelected.innerHTML = str.join(' ');

            removeActiveClassFromGuestsItem(guestsItemAdult);
            elem.classList.add('searchBar__guests-item_active');
        });
    });
    guestsItemChild.forEach(elem => {
        elem.addEventListener('click', () => {
            const str = guestsSelected.innerHTML.split(' ');
            str[3] = `${elem.innerHTML.split(' ')[0]}`;
            guestsSelected.innerHTML = str.join(' ');

            removeActiveClassFromGuestsItem(guestsItemChild);
            elem.classList.add('searchBar__guests-item_active');
        });
    });

    // * DATEPICKER

    const datePicker = document.querySelector('.searchBar__date-selected .icon-calendar');
    const calendar = document.querySelector('.calendar-slider');

    datePicker.addEventListener('click', () => {
        calendar.classList.toggle('calendar-slider_active');
    });

    const calendarDays = document.querySelectorAll('.calendar_june td');
    const dateSelected = document.querySelector('.searchBar__date-selected');

    const today = new Date();

    calendarDays.forEach(elem => {
        if (!elem.classList.contains('td-disable')) {
            elem.addEventListener('click', () => {
                dateSelected.childNodes[0].textContent = `${elem.innerHTML} июня ${today.getFullYear()}`;
                calendarDays.forEach(elem => {
                    elem.classList.contains('td-active') ? elem.classList.remove('td-active') : null;
                });
                elem.classList.add('td-active');
                calendar.classList.remove('calendar-slider_active');
            });
        }
    });

    const calendarSlider = document.querySelector('.calendar-wrapper');
    const calendarSliderBtnPrev = document.querySelector('.calendar-btn-prev');
    const calendarSliderBtnNext = document.querySelector('.calendar-btn-next');

    calendarSliderBtnPrev.addEventListener('click', () => {
        calendarSlider.style.transform = 'translateX(0)';
        calendarSliderBtnPrev.classList.add('calendar-btn-prev_disable');
        calendarSliderBtnNext.classList.remove('calendar-btn-prev_disable');
    });
    calendarSliderBtnNext.addEventListener('click', () => {
        calendarSlider.style.transform = 'translateX(calc(-50%))';
        calendarSliderBtnPrev.classList.remove('calendar-btn-prev_disable');
        calendarSliderBtnNext.classList.add('calendar-btn-prev_disable');
    });

    // * ADVANCEDSEARCH

    const range = document.querySelector('#price');

    const formatForSlider = {
        from: function (formattedValue) {
            return Number(formattedValue);
        },
        to: function (numericValue) {
            return Math.round(numericValue) + '€';
        }
    };
    noUiSlider.create(range, {
        start: [400, 2000],
        connect: true,
        range: {
            min: 200,
            max: 3000
        },
        behaviour: 'drag-smooth',
        step: 50,
        tooltips: true,
        pips: {
            mode: 'count',
            values: 2,
            density: 100,
            stepped: false
        },
        format: formatForSlider
    });

    const valueRange = document.querySelectorAll('.noUi-value-large');

    valueRange[0].style.left = '6.5%';
    valueRange[0].innerHTML += '€';
    valueRange[1].style.left = '91%';
    valueRange[1].innerHTML += '€';

    const searchBarExpandedOpen = document.querySelector('.searchBar__expanded-title');
    const searchBarExpandedClose = document.querySelector('.advancedSearch__exit');
    const advancedSearch = document.querySelector('.advancedSearch');

    searchBarExpandedOpen.addEventListener('click', () => {
        advancedSearch.style.transform = 'scaleY(1)';
        advancedSearch.style.height = 'auto';
    });
    searchBarExpandedClose.addEventListener('click', () => {
        advancedSearch.style.transform = 'scaleY(0)';
        advancedSearch.style.height = '100px';
    });

    const advancedSearchStar = document.querySelectorAll('.advancedSearch__star');
    const advancedSearchFood = document.querySelectorAll('.advancedSearch__food-check');
    const advancedSearchTour = document.querySelectorAll('.advancedSearch__tour-check');
    const advancedSearchDeparting = document.querySelectorAll('.advancedSearch__departing-check');
    const advancedSearchRegion = document.querySelectorAll('.advancedSearch__region-check');

    const advancedSearchFilter = document.querySelector('.advancedSearch__filter-wrapper');

    const addFilter = elem => {
        const filterElements = [...advancedSearchFilter.children];
        let indexOfElement;
        const includesString = (element, index) => {
            indexOfElement = index;
            return element.textContent.includes(elem.parentElement.previousSibling.textContent);
        };
        if (filterElements.some(includesString)) {
            const advancedSearchActive = document.createElement('div');
            advancedSearchActive.classList.add('advancedSearch__filter__active');
            advancedSearchActive.innerHTML = `${elem.textContent}`;
            advancedSearchFilter.childNodes[indexOfElement].append(advancedSearchActive);
        } else {
            const advancedSearchSelect = document.createElement('div');
            advancedSearchSelect.classList.add('advancedSearch__filter__select');
            advancedSearchSelect.innerHTML = elem.parentElement.previousSibling.textContent;
            const advancedSearchActive = document.createElement('div');
            advancedSearchActive.classList.add('advancedSearch__filter__active');
            advancedSearchActive.innerHTML = `${elem.textContent}`;

            advancedSearchSelect.append(advancedSearchActive);
            advancedSearchFilter.append(advancedSearchSelect);
        }
    };
    const addFilterForStar = elem => {
        const filterElements = [...advancedSearchFilter.children];
        let indexOfElement;
        const includesString = (element, index) => {
            indexOfElement = index;
            return element.textContent.includes(elem.parentElement.previousSibling.textContent);
        };
        if (filterElements.some(includesString)) {
            const advancedSearchActive = document.createElement('div');
            advancedSearchActive.classList.add('advancedSearch__filter__active');

            switch (elem.childElementCount) {
                case 5:
                    advancedSearchActive.innerHTML = `${elem.childElementCount} звезд`;
                    break;
                default:
                    advancedSearchActive.innerHTML = `${elem.childElementCount} звезды`;
                    break;
            }

            advancedSearchFilter.childNodes[indexOfElement].append(advancedSearchActive);
        } else {
            const advancedSearchSelect = document.createElement('div');
            advancedSearchSelect.classList.add('advancedSearch__filter__select');
            advancedSearchSelect.innerHTML = elem.parentElement.previousSibling.textContent;
            const advancedSearchActive = document.createElement('div');
            advancedSearchActive.classList.add('advancedSearch__filter__active');

            switch (elem.childElementCount) {
                case 5:
                    advancedSearchActive.innerHTML = `${elem.childElementCount} звезд`;
                    break;
                default:
                    advancedSearchActive.innerHTML = `${elem.childElementCount} звезды`;
                    break;
            }

            advancedSearchSelect.append(advancedSearchActive);
            advancedSearchFilter.append(advancedSearchSelect);
        }
    };
    const removeFilter = (elem, checkIndex, item) => {
        const filterElements = [...advancedSearchFilter.children];
        let indexOfElement, subIndexOfElement, isDelete;
        const includesString = (element, index) => {
            indexOfElement = index;
            return element.textContent.includes(elem.parentElement.previousSibling.textContent);
        };
        if (!isNaN(checkIndex)) {
            function includesSubString(element, index) {
                subIndexOfElement = index;
                return element.textContent.includes(item[checkIndex].textContent);
            }
        } else {
            function includesSubString(element, index) {
                subIndexOfElement = index;
                return element.textContent.includes(elem.textContent);
            }
            isDelete = true;
        }
        if (filterElements.some(includesString)) {
            const subFilterElement = [...filterElements[indexOfElement].childNodes];

            subFilterElement.some(includesSubString) ? subFilterElement[subIndexOfElement].remove() : null;

            filterElements[indexOfElement].childElementCount == 0 && isDelete
                ? filterElements[indexOfElement].remove()
                : null;
        }
    };
    const removeFilterForStar = elem => {
        const filterElements = [...advancedSearchFilter.children];
        let indexOfElement, subIndexOfElement;
        const includesString = (element, index) => {
            indexOfElement = index;
            return element.textContent.includes(elem.parentElement.previousSibling.textContent);
        };
        const includesSubString = (element, index) => {
            subIndexOfElement = index;
            return element.textContent.includes(elem.childElementCount);
        };
        if (filterElements.some(includesString)) {
            const subFilterElement = [...filterElements[indexOfElement].childNodes];

            subFilterElement.some(includesSubString) ? subFilterElement[subIndexOfElement].remove() : null;

            filterElements[indexOfElement].childElementCount == 0 ? filterElements[indexOfElement].remove() : null;
        }
    };

    const addAndRemoveFilterForStar = (elem, elemClass) => {
        if (elem.classList.contains(elemClass)) {
            addFilterForStar(elem);
        } else {
            removeFilterForStar(elem);
        }
    };
    const addAndRemoveFilter = (elem, elemClass) => {
        if (elem.classList.contains(elemClass)) {
            addFilter(elem);
        } else {
            removeFilter(elem);
        }
    };

    const addAndRemoveActiveClassFromAdvancedSearchCheck = (item, elem, index, activeClass) => {
        if (elem.classList.contains(activeClass)) {
            elem.classList.remove(activeClass);
        } else {
            item.forEach(elem => {
                elem.classList.contains(activeClass) ? elem.classList.remove(activeClass) : null;
            });
            removeFilter(elem, index, item);
            elem.classList.add(activeClass);
        }
    };

    advancedSearchStar.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.classList.toggle('advancedSearch__star_active');
            addAndRemoveFilterForStar(elem, 'advancedSearch__star_active');
        });
    });
    let indexCheckFoodElement, indexCheckTourElement, indexCheckDepartingElement, indexCheckRegionElement;
    advancedSearchFood.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            addAndRemoveActiveClassFromAdvancedSearchCheck(
                advancedSearchFood,
                elem,
                indexCheckFoodElement,
                'advancedSearch__food-check_active'
            );
            addAndRemoveFilter(elem, 'advancedSearch__food-check_active');
            indexCheckFoodElement = index;
        });
    });
    advancedSearchTour.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            addAndRemoveActiveClassFromAdvancedSearchCheck(
                advancedSearchTour,
                elem,
                indexCheckTourElement,
                'advancedSearch__tour-check_active'
            );
            addAndRemoveFilter(elem, 'advancedSearch__tour-check_active');
            indexCheckTourElement = index;
        });
    });
    advancedSearchDeparting.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            addAndRemoveActiveClassFromAdvancedSearchCheck(
                advancedSearchDeparting,
                elem,
                indexCheckDepartingElement,
                'advancedSearch__departing-check_active'
            );
            addAndRemoveFilter(elem, 'advancedSearch__departing-check_active');
            indexCheckDepartingElement = index;
        });
    });
    advancedSearchRegion.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            addAndRemoveActiveClassFromAdvancedSearchCheck(
                advancedSearchRegion,
                elem,
                indexCheckRegionElement,
                'advancedSearch__region-check_active'
            );
            addAndRemoveFilter(elem, 'advancedSearch__region-check_active');
            indexCheckRegionElement = index;
        });
    });
});

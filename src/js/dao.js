class newsDao {
  #url;
  constructor(url) {
    this.#url = url;
  }

  async getData(element) {
    await fetch(this.#url)
      .then(response => response.json())
      .then(({ data }) =>
        data.forEach(({ attributes }) => {
          element.innerHTML += /* html */ `<div class="swiper-slide news__slide">
                                            <div class="news__img">
                                            <img src='http://localhost:1337${attributes.imgNews.data.attributes.url}' alt="news1">
                                            <div class="news__date">
                                                <span class="icon-clock"></span>
                                                ${attributes.dateNews}
                                            </div>
                                            <div class="news__flag">
                                                <img src="icons/flag.svg" alt="flag">
                                                <span>от 509€</span>
                                            </div>
                                        </div>
                                        <div class="news__descr">
                                            ${attributes.titleNews}
                                        </div>
                                 </div>`;
        })
      )
      .catch(e => {
        throw new Error(e);
      });
  }
}
class hotOfferDao {
  #url;
  constructor(url) {
    this.#url = url;
  }

  async getData(element) {
    await fetch(this.#url)
      .then(response => response.json())
      .then(({ data }) =>
        data.forEach(({ attributes }) => {
          element.innerHTML += /* html */ `<div class="swiper-slide hot-offer__slide">
                    <div class="hot-offer__img">
                        <img src='http://localhost:1337${attributes.img.data.attributes.url}' alt="offer">
                        <div class="hot-offer__date">
                            <span class="icon-clock"></span>
                            ${attributes.date}
                        </div>
                        <div class="hot-offer__place">
                            <span class="icon-point"></span>
                            ${attributes.place}
                        </div>
                    </div>
                    <div class="hot-offer__descr">
                        <div class="hot-offer__name">${attributes.name}</div>
                        <div class="hot-offer__stars">
                            ${attributes.stars}
                        </div>
                        <div class="hot-offer__descr-wrapper">
                            <div class="hot-offer__low-price">
                                <b>${attributes.lowPrice}</b>/чел
                            </div>
                            <div class="hot-offer__high-price">
                                ${attributes.price}/чел
                            </div>
                        </div>
                        <div class="hot-offer__discount">
                            <img src="icons/flag.svg" alt="flag">
                            <span>${attributes.offer}</span>
                        </div>
                    </div>
                </div>`;
        })
      )
      .catch(e => {
        throw new Error(e);
      });
  }
}
class winterDao {
  #url;
  constructor(url) {
    this.#url = url;
  }

  async getData(element) {
    await fetch(this.#url)
      .then(response => response.json())
      .then(({ data }) =>
        data.forEach(({ attributes }) => {
          element.innerHTML += /* html */ `<div class="swiper-slide winter__slide">
                    <div class="winter__img">
                        <img src='http://localhost:1337${attributes.img.data.attributes.url}' alt="winter">
                    </div>
                    <div class="winter__slide-wrapper">
                        <div class="winter__place">
                            <span class="icon-point"></span>
                            ${attributes.place}
                        </div>
                        <div class="winter__price">
                            от <b>509€</b>/чел
                        </div>
                        <div class="winter__select">
                            Выбрать тур
                        </div>
                    </div>
                </div>`;
        })
      )
      .catch(e => {
        throw new Error(e);
      });
  }
}
class summerDao {
  #url;
  constructor(url) {
    this.#url = url;
  }

  async getData(element) {
    await fetch(this.#url)
      .then(response => response.json())
      .then(({ data }) =>
        data.forEach(({ attributes }) => {
          element.innerHTML += /* html */ `<div class="swiper-slide summer__slide">
                    <div class="summer__img">
                        <img src='http://localhost:1337${attributes.img.data.attributes.url}' alt="summer">
                    </div>
                    <div class="summer__slide-wrapper">
                        <div class="summer__place">
                            <span class="icon-point"></span>
                            ${attributes.place}
                        </div>
                        <div class="summer__price">
                            от <b>509€</b>/чел
                        </div>
                        <div class="summer__select">
                            Выбрать тур
                        </div>
                    </div>
                </div>`;
        })
      )
      .catch(e => {
        throw new Error(e);
      });
  }
}

const news = new newsDao('http://localhost:1337/api/newss?populate=deep');
const newsWrapper = document.querySelector('.news__swiper-wrapper');

const hotOffer = new hotOfferDao('http://localhost:1337/api/hot-offers?populate=deep');
const hotOfferWrapper = document.querySelector('.hot-offer__swiper-wrapper');

const winter = new winterDao('http://localhost:1337/api/winter-tours?populate=deep');
const winterWrapper = document.querySelector('.winter__swiper-wrapper');

const summer = new summerDao('http://localhost:1337/api/summer-tours?populate=deep');
const summerWrapper = document.querySelector('.summer__swiper-wrapper');

news.getData(newsWrapper);
hotOffer.getData(hotOfferWrapper);
winter.getData(winterWrapper);
summer.getData(summerWrapper);

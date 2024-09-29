import * as swiper from "./modules/swiper.js";
import * as functions from "./modules/functions.js";
import * as detail from "./modules/detail.js";

function changeLanguage(lang) {
  let currentUrl = window.location.href;
  const regex = /-(ru|uz|en)\.html/;
  const defaultRegex = /\/$/;
  const htmlRegex = /\.html$/;

  if (currentUrl === window.location.origin + '/' || currentUrl === window.location.origin) {
    if (lang === 'ru') {
      window.location.href = '/index.html';
    } else {
      window.location.href = `/index-${lang}.html`;
    }
    return;
  }

  if (lang === 'ru') {
    if (regex.test(currentUrl)) {
      const newUrl = currentUrl.replace(regex, '.html');
      window.location.href = newUrl;
    } else if (defaultRegex.test(currentUrl)) {
      const newUrl = currentUrl.replace(defaultRegex, '.html');
      window.location.href = newUrl;
    } else if (htmlRegex.test(currentUrl)) {
      window.location.href = currentUrl;
    } else {
      window.location.href = currentUrl.replace(/\/$/, '') + '.html';
    }
  } else {
    let newUrl;

    if (regex.test(currentUrl)) {
      newUrl = currentUrl.replace(regex, `-${lang}.html`);
    } else if (htmlRegex.test(currentUrl)) {
      newUrl = currentUrl.replace(htmlRegex, `-${lang}.html`);
    } else if (defaultRegex.test(currentUrl)) {
      newUrl = currentUrl.replace(defaultRegex, `-${lang}.html`);
    } else {
      newUrl = currentUrl.replace(/\/$/, `-${lang}.html`);
    }

    console.log(newUrl);
    window.location.href = newUrl;
  }
}

const ruLink = document.querySelector('.ru');
const uzLink = document.querySelector('.uz');
const enLink = document.querySelector('.en');

if (ruLink) {
  ruLink.addEventListener('click', function (event) {
    event.preventDefault();
    changeLanguage('ru');
  });
}

if (uzLink) {
  uzLink.addEventListener('click', function (event) {
    event.preventDefault();
    changeLanguage('uz');
  });
}

if (enLink) {
  enLink.addEventListener('click', function (event) {
    event.preventDefault();
    changeLanguage('en');
    console.log('hello');
  });
}

detail.detail();
swiper.swiper();
functions.data();
functions.popular();


const burgerClose = document.querySelector('.header__bar-exit');
const burgerMenu = document.querySelector('.header__bar');
const body = document.querySelector('body');
const burgerOpen = document.querySelector('.header__mobile-burger');


burgerOpen?.addEventListener('click', () => {
  burgerMenu.classList.add('active')
  body.classList.add('active')
})

burgerClose?.addEventListener('click', () => {
  burgerMenu.classList.remove('active')
  body.classList.remove('active')
})



const filterSide = document.querySelector('.catalog__side');
const filterClose = document.querySelectorAll('.catalog__side-close');
const filterOpen = document.querySelector('.catalog__header-filter');

filterClose.forEach(el => {
  el?.addEventListener('click', () => {
    filterSide.classList.remove('active')
    body.classList.remove('active')
  })
})


filterOpen?.addEventListener('click', () => {
  filterSide.classList.add('active')
  body.classList.add('active')
})



document.querySelectorAll('.catalog__item-top').forEach(item => {
  const paginationItems = item.querySelectorAll('.catalog__item-pagination span');
  const paginationZones = item.querySelectorAll('.catalog__item-zone span');
  const images = item.querySelectorAll('.catalog__item-img img');

  paginationZones.forEach((span, index) => {
    span?.addEventListener('mouseenter', () => {
      item.querySelector('.catalog__item-img img.active').classList.remove('active');
      item.querySelector('.catalog__item-pagination span.active').classList.remove('active');
      item.querySelector('.catalog__item-zone span.active').classList.remove('active');

      images[index].classList.add('active');
      paginationItems[index].classList.add('active');
      span.classList.add('active');
    });
  });
});

document.querySelectorAll('.search__item-top').forEach(item => {
  const paginationItems = item.querySelectorAll('.search__item-pagination span');
  const paginationZones = item.querySelectorAll('.search__item-zone span');
  const images = item.querySelectorAll('.search__item-img img');

  paginationZones.forEach((span, index) => {
    span?.addEventListener('mouseenter', () => {
      item.querySelector('.search__item-img img.active').classList.remove('active');
      item.querySelector('.search__item-pagination span.active').classList.remove('active');
      item.querySelector('.search__item-zone span.active').classList.remove('active');

      images[index].classList.add('active');
      paginationItems[index].classList.add('active');
      span.classList.add('active');
    });
  });
});




const accordionBtn = document.querySelectorAll('.catalog__select-btn');
const accordionItem = document.querySelectorAll('.catalog__select');
const accordionBody = document.querySelectorAll('.catalog__select-content');
const accordionArrow = document.querySelectorAll('.catalog__select-arrow');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i]?.addEventListener('click', () => {
    accordionBody[i].classList.toggle('active');
    accordionBtn[i].classList.toggle('active');
    accordionItem[i].classList.toggle('active');
    accordionArrow[i].classList.toggle('active');
    if (accordionBody[i].classList.contains('active')) {
      accordionBody[i].style.minHeight = accordionBody[i].scrollHeight + 'px';
    } else {
      accordionBody[i].style.minHeight = '0';
    }
  });
}


const infoBtn = document.querySelectorAll('.detail__info-btn');
const infoBody = document.querySelectorAll('.detail__info-content');

for (let i = 0; i < infoBtn.length; i++) {
  infoBtn[i]?.addEventListener('click', () => {
    infoBody[i].classList.toggle('active');
    infoBtn[i].classList.toggle('active');
    if (infoBody[i].classList.contains('active')) {
      infoBody[i].style.minHeight = infoBody[i].scrollHeight + 'px';
    } else {
      infoBody[i].style.minHeight = '0';
    }
  });
}




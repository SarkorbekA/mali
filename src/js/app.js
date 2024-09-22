import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination.mySwiperPagination",
  },
  effect: "fade",
  loop: true,
  modules: [Navigation, Pagination, EffectFade]
});

var swiper1 = new Swiper(".productSwiper", {
  navigation: {
    nextEl: ".product__btns-item.right",
    prevEl: ".product__btns-item.left",
  },
  pagination: {
    el: ".swiper-pagination.productSwiperPagination",
  },
  slidesPerView: 4,
  modules: [Navigation, Pagination]
});

var swiper3 = new Swiper(".itemSwiper", {
  pagination: {
    el: ".swiper-pagination.itemSwiperPagination",
  },
  // effect: "fade",
  loop: true,
  modules: [Pagination, EffectFade]
});

var swiper4 = new Swiper(".videoSlider", {
  navigation: {
    nextEl: ".about__video-next",
    prevEl: ".about__video-prev",
  },
  slidesPerView: 1,
  loop: true,
  modules: [Navigation, EffectFade]
});


document.querySelectorAll('.catalog__item-top').forEach(item => {
  const paginationItems = item.querySelectorAll('.catalog__item-pagination span');
  const paginationZones = item.querySelectorAll('.catalog__item-zone span');
  const images = item.querySelectorAll('.catalog__item-img img');

  paginationZones.forEach((span, index) => {
    span.addEventListener('mouseenter', () => {
      console.log(index);
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
    span.addEventListener('mouseenter', () => {
      console.log(index);
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


document.querySelectorAll('.detail__options-item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      return;
    }

    document.querySelectorAll('.detail__options-item').forEach(el => el.classList.remove('active'));

    item.classList.add('active');
  });
});
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

var swiper1 = new Swiper(".catalogSwiper", {
  navigation: {
    nextEl: ".catalog__btns-item.right",
    prevEl: ".catalog__btns-item.left",
  },
  pagination: {
    el: ".swiper-pagination.catalogSwiperPagination",
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
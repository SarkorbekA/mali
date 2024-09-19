import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  loop: true,
  modules: [Navigation, Pagination, EffectFade]
});

var swiper1 = new Swiper(".catalogSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  loop: true,
  modules: [Navigation, Pagination, EffectFade]
});
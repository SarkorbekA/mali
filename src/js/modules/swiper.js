import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

export function swiper() {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination.mySwiperPagination",
      clickable: true,
    },
    loop: true,
    modules: [Navigation, Pagination]
  });

  var swiper5 = new Swiper(".swiperFeatures", {
    pagination: {
      el: ".swiper-pagination.facts-pagination",
      clickable: true,
    },
    slidesPerView: 1.3,
    modules: [Pagination]
  });


  var swiper3 = new Swiper(".itemSwiper", {
    pagination: {
      el: ".swiper-pagination.itemSwiperPagination",
      clickable: true,
    },
    // effect: "fade",
    loop: true,
    modules: [Pagination, EffectFade]
  });

  var swiper4 = new Swiper(".videoSlider", {
    modules: [Navigation, EffectFade, Pagination],
    navigation: {
      nextEl: ".about__video-next",
      prevEl: ".about__video-prev",
    },
    pagination: {
      el: ".videoPagination",
      clickable: true,
    },
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      577: {
        spaceBetween: 0,
      },
    },
  });
  

  var swiper7 = new Swiper(".partnerSwiper", {
    modules: [Pagination],
    // navigation: {
    //   nextEl: ".about__video-next",
    //   prevEl: ".about__video-prev",
    // },
    pagination: {
      el: ".partnerPagination",
      clickable: true,
    },
    slidesPerView: 1,
  });


  var swiper5 = new Swiper(".detailSwiper", {
    navigation: {
      nextEl: ".swiper-button-next.detailNav",
      prevEl: ".swiper-button-prev.detailNav",
    },
    pagination: {
      el: ".swiper-pagination.detailPagination",
      clickable: true,
    },
    slidesPerView: 1,
    loop: true,
    modules: [Navigation, Pagination]
  });

}
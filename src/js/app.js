import * as functions from "./modules/functions.js";
import * as swiper from "./modules/swiper.js";

functions.isWebp();
swiper.swiper();



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
    span?.addEventListener('mouseenter', () => {
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
  item?.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      return;
    }
    
    document.querySelectorAll('.detail__options-item').forEach(el => el.classList.remove('active'));

    item.classList.add('active');
  });
});



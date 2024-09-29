import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

let route = window.location.pathname
let lang = ''

if (route.includes('-en')) {
  lang = 'en'
} else if (route.includes('-uz')) {
  lang = 'uz'
} else {
  lang = 'ru'
}

export function data() {
  if (route.includes('catalog.html') || route.includes('catalog-uz.html') || route.includes('catalog-en.html')) {

    fetch('./files/products.json')
      .then(response => response.json())
      .then(data => {
        data = data.filter(el => el.img)

        const catalogContainer = document.querySelector('.catalog__list');
        const baseUrl = "img/products/";

        data.forEach(product => {
          const li = document.createElement('li');
          li.classList.add('catalog__item');

          let weightDisplay;
          if (product.count) {
            if (lang === 'en') {
              weightDisplay = product.weight.map(w => `<h3>${w} g / ${product.count} pcs</h3>`).join('');
            } else if (lang === 'uz') {
              weightDisplay = product.weight.map(w => `<h3>${w} g / ${product.count} dona</h3>`).join('');
            } else {
              weightDisplay = product.weight.map(w => `<h3>${w} г / ${product.count} шт</h3>`).join('');
            }
          } else {
            weightDisplay = product.weight.map(w => `<h3>${w} г</h3>`).join('');
          }

          let detailPageUrl;

          if (route.includes('-en')) {
            detailPageUrl = `detail-en.html?id=${product.id}`;
          } else if (route.includes('-uz')) {
            detailPageUrl = `detail-uz.html?id=${product.id}`;
          } else {
            detailPageUrl = `detail.html?id=${product.id}`;
          }

          li.innerHTML = `
                  <a href="${detailPageUrl}" class="catalog__item-link">
                    <div class="catalog__item-top">
                      <div class="catalog__item-zone">
                        <span class="active"></span>
                      </div>
                      <div class="catalog__item-img">
                        <img src="${baseUrl + product.img}" alt="${product.name[lang]}" class="active">
                      </div>
                      <div class="catalog__item-pagination">
                        <span class="active"></span>
                      </div>
                    </div>
                    <div class="catalog__item-box">
                      <h3 class="catalog__item-title">${product.type[lang]} «${product.name[lang]}»</h3>
                      <p class="catalog__item-text">${product.info[lang]}</p>
                      <div class="catalog__item-bottom">
                        ${weightDisplay}
                      </div>
                    </div>
                  </a>
                `;

          catalogContainer.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error loading JSON file:', error);
      });
  }
}


export function popular() {
  if (route === '/' || route.includes('index.html') || route.includes('detail.html') || route === '/index-uz.html' || route.includes('index-en.html') || route.includes('detail.html') || route.includes('detail-uz.html')) {

    fetch('./files/products.json')
      .then(response => response.json())
      .then(data => {
        data = data.filter(el => el.img);

        const productSliderContainer = document.querySelector('.productSwiper .swiper-wrapper');

        const baseUrl = "img/products/";

        productSliderContainer.innerHTML = '';

        data.forEach(product => {
          const slide = document.createElement('div');
          slide.classList.add('swiper-slide');


          let weightDisplay;
          if (product.count) {
            if (lang === 'en') {
              weightDisplay = product.weight.map(w => `<h3>${w} g / ${product.count} pcs</h3>`).join('');
            } else if (lang === 'uz') {
              weightDisplay = product.weight.map(w => `<h3>${w} g / ${product.count} dona</h3>`).join('');
            } else {
              weightDisplay = product.weight.map(w => `<h3>${w} г / ${product.count} шт</h3>`).join('');
            }
          } else {

            weightDisplay = product.weight.map(w => `<h3>${w} ${lang === 'en' ? "g" : lang === 'uz' ? "g" : "г"}</h3>`).join('');
          }

          let detailPageUrl;
          if (route.includes('-en')) {
            detailPageUrl = `detail-en.html?id=${product.id}`;
          } else if (route.includes('-uz')) {
            detailPageUrl = `detail-uz.html?id=${product.id}`;
          } else {
            detailPageUrl = `detail.html?id=${product.id}`;
          }

          slide.innerHTML = `
                    <a href="${detailPageUrl}" class="product__item">
                      <div class="product__item-img">
                        <img src="${baseUrl + product.img}" alt="${product.name[lang]}">
                      </div>
                      <div class="product__item-box">
                        <h3 class="product__item-title">${product.type[lang]} «${product.name[lang]}»</h3>
                        <p class="product__item-text">${product.info[lang]}</p>
                        <div class="product__item-bottom">
                          ${weightDisplay}
                        </div>
                      </div>
                    </a>
                  `;


          productSliderContainer.appendChild(slide);
        });

        if (productSliderContainer.childElementCount > 0) {
          var swiper1 = new Swiper(".productSwiper", {
            navigation: {
              nextEl: ".product__btns-item.right",
              prevEl: ".product__btns-item.left",
            },
            pagination: {
              el: ".swiper-pagination.productSwiperPagination",
              clickable: true,
            },
            slidesPerView: 2,
            modules: [Navigation, Pagination],
            breakpoints: {
              577: {
                slidesPerView: 4,
              },
            },
          });
        }
      })
      .catch(error => {
        console.error('Error loading JSON file:', error);
      });
  }
}
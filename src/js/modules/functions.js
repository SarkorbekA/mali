import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';


export function data() {
  if (window.location.pathname.includes('catalog.html')) {

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
            weightDisplay = product.weight.map(w => `<h3>${w} г / ${product.count} шт</h3>`).join('');
          } else {
            weightDisplay = product.weight.map(w => `<h3>${w} г</h3>`).join('');
          }

          const detailPageUrl = `detail.html?id=${product.id}`;

          li.innerHTML = `
                  <a href="${detailPageUrl}" class="catalog__item-link">
                    <div class="catalog__item-top">
                      <div class="catalog__item-zone">
                        <span class="active"></span>
                      </div>
                      <div class="catalog__item-img">
                        <img src="${baseUrl + product.img}" alt="${product.name}" class="active">
                      </div>
                      <div class="catalog__item-pagination">
                        <span class="active"></span>
                      </div>
                    </div>
                    <div class="catalog__item-box">
                      <h3 class="catalog__item-title">${product.type} «${product.name}»</h3>
                      <p class="catalog__item-text">${product.info}</p>
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
  if (window.location.pathname === '/' || window.location.pathname.includes('index.html') || window.location.pathname.includes('detail.html')) {

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
            weightDisplay = product.weight.map(w => `<h3>${w} г / ${product.count} шт</h3>`).join('');
          } else {
            weightDisplay = product.weight.map(w => `<h3>${w} г</h3>`).join('');
          }

          const detailPageUrl = `detail.html?id=${product.id}`;

          slide.innerHTML = `
                    <a href="${detailPageUrl}" class="product__item">
                      <div class="product__item-img">
                        <img src="${baseUrl + product.img}" alt="${product.name}">
                      </div>
                      <div class="product__item-box">
                        <h3 class="product__item-title">${product.type} «${product.name}»</h3>
                        <p class="product__item-text">${product.info}</p>
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
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

export function detail() {
  if (window.location.pathname.includes('detail.html')) {
    const goBackButton = document.getElementById('goBackButton');
    if (goBackButton) {
      goBackButton.addEventListener('click', () => {
        window.history.back();
      });
    }

    function getProductIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
    }

    const productId = getProductIdFromURL();

    if (productId) {
      fetch('./files/products.json')
        .then(response => response.json())
        .then(data => {
          const product = data.find(item => item.id == productId);
          const baseUrl = "img/products/";

          if (product) {
            document.querySelectorAll('.detail__img-main img').forEach(el => {
              el.src = baseUrl + product.id + '.png'
            });
            document.querySelector('.detail__img-item img').src = baseUrl + product.id + '.png';

            const sliderContainer = document.querySelector('.swiper-wrapper');
            sliderContainer.innerHTML = '';

            document.querySelector('.detail__item-type').textContent = 'Тесто';
            document.querySelector('.detail__item-name').textContent = product.name;
            document.querySelector('.detail__item-info').textContent = product.info;
            if (product.compound) {
              document.querySelectorAll('.compound .detail__info-content p').forEach(el => {
                el.textContent = product.compound;
              });
            } else {
              document.querySelectorAll('.compound').forEach(el => el.remove());
            }

            if (product.energy_value) {
              document.querySelectorAll('.energy_value .detail__info-content p').forEach(el => {
                el.textContent = product.energy_value + " ккал";
              });
            } else {
              document.querySelectorAll('.energy_value').forEach(el => el.remove());
            }

            if (product.nutritional_value) {
              document.querySelectorAll('.nutritional_value .detail__info-content p').forEach(el => {
                el.textContent = product.nutritional_value;
              });
            } else {
              document.querySelectorAll('.nutritional_value').forEach(el => el.remove());
            }

            document.querySelectorAll('.detail__options').forEach((packContainer, containerIndex) => {
              packContainer.innerHTML = '';

              if (product.pack && product.pack.list) {
                product.pack.list.forEach((packItem, index) => {
                  const packEl = document.createElement('li');
                  packEl.classList.add('detail__options-item');

                  if (index === 0) {
                    packEl.classList.add('active');
                  }

                  packEl.innerHTML = `
                    <h3 class="detail_options-title">${product.pack.type}</h3>
                    <ul class="detail__options-list">
                      <li class="detail__options-el">
                        <h4>Вес</h4>
                        <h3>${packItem.weight} г</h3>
                      </li>
                      <li class="detail__options-el">
                        <h4>В упаковке</h4>
                        <h3>${packItem.inpack} шт</h3>
                      </li>
                      <li class="detail__options-el">
                        <h4>В коробке</h4>
                        <h3>${packItem.box} уп</h3>
                      </li>
                      <li class="detail__options-el">
                        <h4>Вес шт</h4>
                        <h3>${packItem.box_weight} кг</h3>
                      </li>
                    </ul>
                  `;

                  packContainer.appendChild(packEl);
                });

                packContainer.querySelectorAll('.detail__options-item').forEach(item => {
                  item?.addEventListener('click', () => {
                    if (item.classList.contains('active')) {
                      return;
                    }

                    packContainer.querySelectorAll('.detail__options-item').forEach(el => el.classList.remove('active'));

                    item.classList.add('active');
                  });
                });
              }
            });
          } else {
            console.error('Product not found');
            window.history.back();
          }
        })
        .catch(error => {
          console.error('Error loading JSON file:', error);
          window.history.back();
        });
    } else {
      console.error('Product ID not found in URL');
      window.history.back();
    }
  }


}
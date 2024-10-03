export function detail() {
  let route = window.location.pathname
  let lang = ''

  if (route.includes('-en')) {
    lang = 'en'
  } else if (route.includes('-uz')) {
    lang = 'uz'
  } else {
    lang = 'ru'
  }

  const translations = {
    "weight_per_piece": {
      "uz": "Og'irlig donaga",
      "ru": "Вес шт",
      "en": "Weight per piece"
    },
    "in_box": {
      "uz": "Qutida",
      "ru": "В коробке",
      "en": "In box"
    },
    "in_pack": {
      "uz": "Qadoqdagi",
      "ru": "В упаковке",
      "en": "In pack"
    },
    "weight": {
      "uz": "Og'irligi",
      "ru": "Вес",
      "en": "Weight"
    },
    "inbox": {
      "uz": "Qutida",
      "ru": "В коробке",
      "en": "In box"
    },
    "in_container": {
      "uz": "Konteynerda",
      "ru": "В таре ",
      "en": "In container"
    },
  };


  if (route.includes('detail.html') || route.includes('detail-uz.html') || route.includes('detail-en.html')) {
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
              el.src = baseUrl + product.img
            });
            document.querySelector('.detail__img-item img').src = baseUrl + product.img;

            const sliderContainer = document.querySelector('.swiper-wrapper');
            sliderContainer.innerHTML = '';

            document.querySelector('.detail__item-type').textContent = product?.type?.[lang];
            document.querySelector('.detail__item-name').textContent = product?.name?.[lang];
            document.querySelector('.detail__item-info').textContent = product?.info[lang];
            if (product.compound) {
              document.querySelectorAll('.compound .detail__info-content p').forEach(el => {
                el.textContent = product.compound[lang];
              });
            } else {
              document.querySelectorAll('.compound').forEach(el => el.remove());
            }

            if (product.energy_value) {
              document.querySelectorAll('.energy_value .detail__info-content p').forEach(el => {
                el.textContent = product.energy_value + (lang === 'en' ? " kcal" : lang === 'uz' ? " kkal" : " ккал");
              });
            } else {
              document.querySelectorAll('.energy_value').forEach(el => el.remove());
            }

            if (product.nutritional_value) {
              document.querySelectorAll('.nutritional_value .detail__info-content p').forEach(el => {
                el.textContent = product.nutritional_value[lang];
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
                  <h3 class="detail_options-title">${packItem?.type?.[lang] ?? ''}</h3>
                  <ul class="detail__options-list">
                    ${packItem.weight ? `
                      <li class="detail__options-el">
                        <h4>${translations["weight"]?.[lang] ?? ''}</h4>
                        <h3>${packItem.weight} ${lang === 'en' ? "g" : lang === 'uz' ? "g" : "г"}</h3>
                      </li>` : ''}
                    ${packItem.weight_big ? `
                      <li class="detail__options-el">
                        <h4>${translations["weight"]?.[lang] ?? ''}</h4>
                        <h3>${packItem.weight_big} ${lang === 'en' ? "kg" : lang === 'uz' ? "kg" : "кг"}</h3>
                      </li>` : ''}
                    ${packItem.inpack ? `
                      <li class="detail__options-el">
                        <h4>${translations["in_pack"]?.[lang] ?? ''}</h4>
                        <h3>${packItem.inpack} ${lang === 'en' ? "pcs" : lang === 'uz' ? "dona" : "шт"}</h3>
                      </li>` : ''}
                    ${packItem.box ? `
                      <li class="detail__options-el">
                        <h4>${translations["in_box"]?.[lang] ?? ''}</h4>
                        <h3>${packItem.box} ${lang === 'en' ? "pkg" : lang === 'uz' ? "pkt" : "уп"}</h3>
                      </li>` : ''}
                    ${packItem.in_container ? `
                      <li class="detail__options-el">
                        <h4>${translations["in_container"]?.[lang] ?? ''}</h4>
                        <h3>${packItem.in_container} ${lang === 'en' ? "pcs" : lang === 'uz' ? "dona" : "шт"}</h3>
                      </li>` : ''}
                    ${packItem.box_weight ? `
                      <li class="detail__options-el">
                        <h4>${translations["weight_per_piece"]?.[lang] ?? ''}</h4>
                        <h3>${packItem.box_weight} ${lang === 'en' ? "kg" : lang === 'uz' ? "pkt" : "кг"}</h3>
                      </li>` : ''}
                      ${packItem.inbox ? `
                      <li class="detail__options-el">
                        <h4>${translations["inbox"]?.[lang] ?? ''}</h4>
                        <h3>${packItem.inbox} ${lang === 'en' ? "pcs" : lang === 'uz' ? "dona" : "шт"}</h3>
                      </li>` : ''}
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
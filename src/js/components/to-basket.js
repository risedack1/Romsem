if (document.querySelector('.card')) {
  const cardButton = document.querySelector('.card-item__button');

  cardButton.addEventListener('click', () => {
    const cardItem = cardButton.closest('.card-item');
    const basketWrapper = document.querySelector('.basket__list');
    const cardCounter = document.querySelector('.counter__items');


    // Получаем данные с карточки, создаем обьект
    const cardInfo = {
      cardId: cardItem.getAttribute('data-id'),
      cardTitle: cardItem.querySelector('.card-item__title').textContent,
      cardPrice: parseInt(cardItem.querySelector('.card-item__price').textContent),
      cardCount: +cardItem.querySelector('.counter__items').textContent,
      cardImage: cardItem.querySelector('.card-item__image').getAttribute('src'),
      createImgforAviWebp() {
        this.cardImageAviWebp = this.cardImage.substring(0, this.cardImage.length - 3);
      }
    };

    cardInfo.createImgforAviWebp();

    const currentBasketItem = basketWrapper.querySelector(`[data-id="${cardInfo.cardId}"`);

    if (currentBasketItem) {
      const currentCounter = currentBasketItem.querySelector('.counter__items');
      currentCounter.innerText = +currentCounter.innerText + cardInfo.cardCount;
    } else {
      console.log('111');
      basketWrapper.innerHTML += `
      <article class="basket__order-mini order-mini" data-id="${cardInfo.cardId}">
      <div class="order-mini__image">
        <picture>
          <source srcset="${cardInfo.cardImageAviWebp}avif" type="image/avif">
          <source srcset="${cardInfo.cardImageAviWebp}webp" type="image/webp">
          <img loading="lazy" src="${cardInfo.cardImage}" class="image" width="70" height="47"
            alt="фото блюда">
        </picture>
      </div>
      <h3 class="order-mini__title">
        ${cardInfo.cardTitle}
      </h3>
      <div class="order-mini__counter counter">
        <button class="counter__minus btn-reset"></button>
        <span class="counter__items">
          ${cardInfo.cardCount}
        </span>
        <button class="counter__plus btn-reset"></button>
      </div>
      <div class="order-mini__cost">
        ${cardInfo.cardPrice} <span>СОМ</span>
      </div>
      </article>
        `;
    }

    cardCounter.innerText = '1';

    toggleBasketStatus();
  });

  function toggleBasketStatus() {
    const basketWrapper = document.querySelector('.basket__list');
    const basketTitle = document.querySelector('.basket__note-title');
    const basketSubtitle = document.querySelector('.basket__note-subtitle');
    const basketResult = document.querySelector('.basket__result');

    if (basketWrapper.children.length >= 1) {
      basketTitle.innerText = 'Корзина';
      basketTitle.style.marginBottom = '12px';
      basketResult.style.display = 'block';
      basketSubtitle.style.cssText = 'opacity: 0; visibility: hidden; position: absolute;';
    } else {
      basketTitle.innerText = 'Ваша корзина пуста';
      basketTitle.style.marginBottom = '0';
      basketResult.style.display = 'none';
      basketSubtitle.style.cssText = 'opacity: 1; visibility: visible; position: static;';
    }
  }

}

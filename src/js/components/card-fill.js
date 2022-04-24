window.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('menu-card__link')) {
    const cardMini = target.closest('.menu-card');

    // Карточка товара
    const card = document.querySelector('.card-item');
    const cardImage = card.querySelector('picture');
    const cardTitle = card.querySelector('.card-item__title');
    const cardInfo = card.querySelector('.card-item__info');
    const cardPrice = card.querySelector('.card-item__price');


    let cardMiniObj = {
      id: cardMini.getAttribute('data-id'),
      imgSource: cardMini.querySelector('.menu-card__image').getAttribute('src'),
      title: cardMini.querySelector('.menu-card__title').innerText,
      info: cardMini.querySelector('.menu-card__info').innerText,
      createImgforAviWebp() {
        this.cardImageAviWebp = this.imgSource.substring(0, this.imgSource.length - 3);
      },
      price: cardMini.querySelector('.menu-card__price').innerText,
    };
    cardMiniObj.createImgforAviWebp();

    card.dataset.id = `${cardMiniObj.id}`;

    cardImage.innerHTML = `
      <source srcset="${cardMiniObj.cardImageAviWebp}avif" type="image/avif">
      <source srcset="${cardMiniObj.cardImageAviWebp}webp" type="image/webp">
      <img class="card-item__image" loading="lazy" src="${cardMiniObj.imgSource}" class="image"
      alt="${cardMiniObj.title}">
    `

    cardTitle.innerText = cardMiniObj.title;
    cardInfo.innerText = cardMiniObj.info;
    cardPrice.innerText = cardMiniObj.price;
  }
});

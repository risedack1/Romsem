const cardNext = document.querySelector('.card__next');
const cardPrev = document.querySelector('.card__prev');

cardNext.addEventListener('click', (e) => {
  const target = e.target;

  const modalContainer = document.querySelector('.graph-modal__container');
  target.style.pointerEvents = 'none';

  modalContainer.classList.add('graph-modal__container--blink');

  setTimeout(() => {
    const currentCard = target.closest('.card');
    const currentCardId = currentCard.querySelector('.card-item').getAttribute('data-id');

    const cardsWrapper = document.querySelector('.gallery__inner');
    const currentCardItem = cardsWrapper.querySelector(`[data-id="${currentCardId}"]`).closest('.gallery__item');

    if (currentCardItem.nextElementSibling) {
      const nextCard = currentCardItem.nextElementSibling.querySelector('.gallery__card');

      // Карточка товара
      const cardItem = document.querySelector('.card-item');
      const cardImage = cardItem.querySelector('picture');
      const cardTitle = cardItem.querySelector('.card-item__title');
      const cardInfo = cardItem.querySelector('.card-item__info');
      const cardPrice = cardItem.querySelector('.card-item__price');

      nextCardObj = {
        id: nextCard.getAttribute('data-id'),
        imgSource: nextCard.querySelector('.menu-card__image').getAttribute('src'),
        title: nextCard.querySelector('.menu-card__title').innerText,
        info: nextCard.querySelector('.menu-card__info').innerText,
        createImgforAviWebp() {
          this.cardImageAviWebp = this.imgSource.substring(0, this.imgSource.length - 3);
        },
        price: nextCard.querySelector('.menu-card__price').innerText,
      };
      nextCardObj.createImgforAviWebp();

      cardItem.dataset.id = `${nextCardObj.id}`;

      cardImage.innerHTML = `
    <source srcset="${nextCardObj.cardImageAviWebp}avif" type="image/avif">
    <source srcset="${nextCardObj.cardImageAviWebp}webp" type="image/webp">
    <img class="card-item__image" loading="lazy" src="${nextCardObj.imgSource}" class="image"
    alt="${nextCardObj.title}">
    `

      cardTitle.innerText = nextCardObj.title;
      cardInfo.innerText = nextCardObj.info;
      cardPrice.innerText = nextCardObj.price;
    }
  }, 250);

  setTimeout(() => {
    modalContainer.classList.remove('graph-modal__container--blink');
    target.style.pointerEvents = 'auto';
  }, 500);
});

cardPrev.addEventListener('click', (e) => {
  const target = e.target;
  const modalContainer = document.querySelector('.graph-modal__container');

  modalContainer.classList.add('graph-modal__container--blink');

  const animationBlink = setTimeout(() => {
    const currentCard = target.closest('.card');
    const currentCardId = currentCard.querySelector('.card-item').getAttribute('data-id');

    const cardsWrapper = document.querySelector('.gallery__inner');
    const currentCardItem = cardsWrapper.querySelector(`[data-id="${currentCardId}"]`).closest('.gallery__item');

    if (currentCardItem.previousElementSibling) {
      const prevCard = currentCardItem.previousElementSibling.querySelector('.gallery__card');

      // Карточка товара
      const cardItem = document.querySelector('.card-item');
      const cardImage = cardItem.querySelector('picture');
      const cardTitle = cardItem.querySelector('.card-item__title');
      const cardInfo = cardItem.querySelector('.card-item__info');
      const cardPrice = cardItem.querySelector('.card-item__price');

      prevCardObj = {
        id: prevCard.getAttribute('data-id'),
        imgSource: prevCard.querySelector('.menu-card__image').getAttribute('src'),
        title: prevCard.querySelector('.menu-card__title').innerText,
        info: prevCard.querySelector('.menu-card__info').innerText,
        createImgforAviWebp() {
          this.cardImageAviWebp = this.imgSource.substring(0, this.imgSource.length - 3);
        },
        price: prevCard.querySelector('.menu-card__price').innerText,
      };
      prevCardObj.createImgforAviWebp();

      cardItem.dataset.id = `${prevCardObj.id}`;

      cardImage.innerHTML = `
        <source srcset="${prevCardObj.cardImageAviWebp}avif" type="image/avif">
        <source srcset="${prevCardObj.cardImageAviWebp}webp" type="image/webp">
        <img class="card-item__image" loading="lazy" src="${prevCardObj.imgSource}" class="image"
        alt="${prevCardObj.title}">
      `

      cardTitle.innerText = prevCardObj.title;
      cardInfo.innerText = prevCardObj.info;
      cardPrice.innerText = prevCardObj.price;
    }
  }, 300);

  setTimeout(() => {
    modalContainer.classList.remove('graph-modal__container--blink')
  }, 1000);
});

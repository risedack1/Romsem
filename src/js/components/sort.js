const sortButtonsWrapper = document.querySelector('.gallery__sort-list');
const galleryList = document.querySelector('.gallery__inner');

if (sortButtonsWrapper) {
  sortButtonsWrapper.addEventListener('click', (e) => {
    const target = e.target;

    for (let i = 0; i < sortButtonsWrapper.children.length; i++) {
      const currentButton = sortButtonsWrapper.children[i].querySelector('.gallery__sort-item-button');
      if (currentButton.classList.contains('gallery__sort-item-button--active')) {
        currentButton.classList.remove('gallery__sort-item-button--active');
      }
    }

    if (target.dataset.sort === 'toExpensive') {
      target.classList.add('gallery__sort-item-button--active');
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = i; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__price').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__price').textContent);

          if (priceI > priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            insertAfter(replacedNode, galleryList.children[i]);
          }
        }
      }
    } else if (target.dataset.sort === 'toCheap') {
      target.classList.add('gallery__sort-item-button--active');
      // debugger;
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = i; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__price').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__price').textContent);

          if (priceI < priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            insertAfter(replacedNode, galleryList.children[i]);
          }
        }
      }
    } else if (target.dataset.sort === 'toLarge') {
      target.classList.add('gallery__sort-item-button--active');
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = i; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__peaces').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__peaces').textContent);

          if (priceI > priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            insertAfter(replacedNode, galleryList.children[i]);
          }
        }
      }
    } else if (target.dataset.sort === 'toSmall') {
      target.classList.add('gallery__sort-item-button--active');
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = i; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__peaces').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__peaces').textContent);

          if (priceI < priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            insertAfter(replacedNode, galleryList.children[i]);
          }
        }
      }
    }
  });
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

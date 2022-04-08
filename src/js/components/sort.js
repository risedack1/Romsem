const sortButtonsWrapper = document.querySelector('.gallery__sort-list');
const galleryList = document.querySelector('.gallery__inner');

if (sortButtonsWrapper) {
  sortButtonsWrapper.addEventListener('click', (e) => {
    const target = e.target;

    if (target.dataset.sort === 'toExpensive') {
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = 0; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__price').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__price').textContent);

          if (priceI < priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            galleryList.children[j].parentNode.insertBefore(replacedNode, galleryList.children[j]);
          }
        }
      }
    } else if (target.dataset.sort === 'toCheap') {
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = 0; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__price').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__price').textContent);

          if (priceI > priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            galleryList.children[j].parentNode.insertBefore(replacedNode, galleryList.children[j]);
          }
        }
      }
    } else if (target.dataset.sort === 'toLarge') {
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = 0; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__peaces').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__peaces').textContent);

          if (priceI < priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            galleryList.children[j].parentNode.insertBefore(replacedNode, galleryList.children[j]);
          }
        }
      }
    } else if (target.dataset.sort === 'toSmall') {
      for (let i = 0; i < galleryList.children.length; i++) {
        for (let j = 0; j < galleryList.children.length; j++) {
          const priceI = parseInt(galleryList.children[i].querySelector('.menu-card__peaces').textContent);
          const priceJ = parseInt(galleryList.children[j].querySelector('.menu-card__peaces').textContent);

          if (priceI > priceJ) {
            let replacedNode = galleryList.replaceChild(galleryList.children[j], galleryList.children[i]);
            galleryList.children[j].parentNode.insertBefore(replacedNode, galleryList.children[j]);
          }
        }
      }
    }
  });
}

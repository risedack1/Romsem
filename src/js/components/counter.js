const counter = document.querySelector('.counter');

if (counter) {
  window.addEventListener('click', (e) => {
    const target = e.target;
    let counterItem;

    if (target.classList.contains('counter__minus') || target.classList.contains('counter__plus')) {
      const counterWrapper = target.closest('.counter');
      counterItem = counterWrapper.querySelector('.counter__items');
    }

    if (target.classList.contains('counter__minus') && target.closest('.basket__list')) {
      if (+counterItem.innerText === 1) {
        target.closest('.order-mini').remove();

        toggleBasketStatus();
      }
    }

    if (target.classList.contains('counter__minus')) {
      if (+counterItem.innerText > 1) counterItem.innerText = --counterItem.innerText;
    } else if (target.classList.contains('counter__plus')) {
      counterItem.innerText = ++counterItem.innerText;
    }
  });

  function toggleBasketStatus() {
    const basketWrapper = document.querySelector('.basket__list');
    const basketTitle = document.querySelector('.basket__note-title');
    const basketSubtitle = document.querySelector('.basket__note-subtitle');
    const basketResult = document.querySelector('.basket__result');

    if (basketWrapper.children.length >= 1) {
      basketTitle.innerText = 'Корзина';
      basketResult.style.display = 'block';
      basketSubtitle.style.cssText = 'opacity: 0; visibility: hidden; position: absolute;';
    } else {
      basketTitle.innerText = 'Ваша корзина пуста';
      basketResult.style.display = 'none';
      basketSubtitle.style.cssText = 'opacity: 1; visibility: visible; position: static;';
    }
  }
}

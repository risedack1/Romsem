import { toggleBasketStatus } from "./basket-note";

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
}

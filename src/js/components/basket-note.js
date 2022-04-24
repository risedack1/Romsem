export function toggleBasketStatus() {
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

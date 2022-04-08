function toggleBasketStatus() {
  const basketWrapper = document.querySelector('.basket__list');
  const basketTitle = document.querySelector('.basket__note');
  const basketSubtitle = basketTitle.querySelector('span');

  if (basketWrapper.children.length >= 1) {
    basketTitle.innerText = 'Корзина';
    basketSubtitle.style.display = 'none';
  } else {
    basketTitle.innerText = 'Ваша корзина пуста';
    basketSubtitle.style.display = 'Block';
  }
}

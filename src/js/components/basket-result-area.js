window.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('counter__minus') && target.closest('.basket__list')) {
    changeResult();
    changeUpButtonCounter();
  } else if (target.classList.contains('counter__plus') && target.closest('.basket__list')) {
    changeResult();
    changeUpButtonCounter();
  } else if (target.classList.contains('card-item__button')) {
    changeResult();
    changeUpButtonCounter();
  }
});

const basketButton = document.querySelector('.up-button');

if (window.innerWidth > 1100) {
  window.addEventListener('scroll', () => {
    const heightwindow = window.innerHeight / 2;
    let scrollHeight = Math.abs(document.documentElement.getBoundingClientRect().top);

    if (scrollHeight > heightwindow) {
      basketButton.classList.add('up-button--active');
    } else {
      basketButton.classList.remove('up-button--active');
    }
  });
}

basketButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

function changeUpButtonCounter() {
  const basketItems = document.querySelectorAll('.basket__order-mini');
  const upBasketCounter = document.querySelector('.up-button__counter');

  upBasketCounter.innerText = basketItems.length;
}

function changeResult() {
  const basketItems = document.querySelectorAll('.basket__order-mini');

  // Поле результата
  const resultPrice = document.querySelector('.basket__result-price');
  const resultAmount = document.querySelector('.basket__result-amount');
  const resultDeliveryPrice = document.querySelector('.basket__result-delivery');
  const resultDeliveryFree = document.querySelector('.basket__result-delivery-free');
  const resultTotalPrice = document.querySelector('.basket__result-right-price');
  const totalOfferPrice = document.querySelector('.basket__cost-text');
  const resultDiscount = document.querySelector('.basket__result-right--discount');

  resultAmount.innerText = basketItems.length;
  resultPrice.innerText = '0';

  basketItems.forEach(basketItem => {
    const resultObj = {
      amount: +basketItem.querySelector('.counter__items').textContent,
      price: parseInt(basketItem.querySelector('.order-mini__cost').textContent),
    }

    const basketItemSum = resultObj.amount * resultObj.price;
    resultPrice.innerText = +resultPrice.textContent + basketItemSum;
  });

  if (+resultPrice.textContent > 3000 && +resultPrice.textContent < 8000) {
    resultDeliveryPrice.style.display = 'none';
    resultDeliveryFree.style.display = 'block';
    resultDiscount.innerText = '0';

    resultTotalPrice.innerText = +resultPrice.textContent;
  } else if (+resultPrice.textContent >= 8000) {
    resultDeliveryPrice.style.display = 'none';
    resultDeliveryFree.style.display = 'block';

    resultDiscount.innerText = '15%';

    resultTotalPrice.innerText = Math.round((+resultPrice.textContent + parseInt(resultDeliveryPrice.textContent)) - ((+resultPrice.textContent + parseInt(resultDeliveryPrice.textContent)) / 100) * parseInt(resultDiscount.textContent));
  } else {
    resultDeliveryPrice.style.display = 'block';
    resultDeliveryFree.style.display = 'none';
    resultDiscount.innerText = '0';

    resultTotalPrice.innerText = +resultPrice.textContent + parseInt(resultDeliveryPrice.textContent);
  }

  totalOfferPrice.innerText = resultTotalPrice.textContent;
}

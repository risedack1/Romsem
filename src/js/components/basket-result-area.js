window.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('counter__minus') && target.closest('.basket__list')) {
    changeResult();
  } else if (target.classList.contains('counter__plus') && target.closest('.basket__list')) {
    changeResult();
  } else if (target.classList.contains('card-item__button')) {
    changeResult();
  }
});

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

  console.log(resultDiscount);

  // if (+resultPrice.innerText > 3000) {
  //   resultDeliveryPrice.style.display = 'none';
  //   resultDeliveryFree.style.display = 'block';

  //   resultTotalPrice.innerText = +resultPrice.innerText;
  // } else {
  //   resultDeliveryPrice.style.display = 'block';
  //   resultDeliveryFree.style.display = 'none';

  //   resultTotalPrice.innerText = +resultPrice.innerText + parseInt(resultDeliveryPrice.innerText);
  // }

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

  console.log(+resultPrice.innerText);
  console.log(parseInt(resultDeliveryPrice.textContent));

  totalOfferPrice.innerText = resultTotalPrice.textContent;
}

const infoWrapper = document.querySelector('.info__content-wrapper');

if (infoWrapper) {
  const infoHeight = document.querySelector('.info__content').offsetHeight;
  const infoButton = document.querySelector('.info__more');

  infoButton.addEventListener('click', () => {
    infoWrapper.classList.toggle('info__content-wrapper--active');
    infoButton.classList.toggle('info__more--active');

    if (infoWrapper.classList.contains('info__content-wrapper--active')) {
      infoWrapper.style.maxHeight = infoHeight + 'px';
    } else {
      infoWrapper.style.maxHeight = 300 + 'px';
    }
  });
}

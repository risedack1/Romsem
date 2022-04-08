const menuButton = document.querySelector('.small-nav__button--menu');
const basketButton = document.querySelector('.small-nav__button--basket');
const rightSide = document.querySelector('.right-aside');
const rightCloseButton = rightSide.querySelector('.right-aside__close');
const leftSide = document.querySelector('.left-aside');
const leftCloseButton = leftSide.querySelector('.left-aside__close');

menuButton.addEventListener('click', () => {
  leftSide.classList.toggle('left-aside--active');
});

leftCloseButton.addEventListener('click', () => {
  leftSide.classList.remove('left-aside--active');
});

rightCloseButton.addEventListener('click', () => {
  rightSide.classList.remove('right-aside--active');
});

basketButton.addEventListener('click', () => {
  rightSide.classList.toggle('right-aside--active');
});

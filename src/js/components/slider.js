import Swiper, {
  Navigation,
  Pagination
} from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.hero-slider__wrapper', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.hero-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
});

const swiperMenu = new Swiper('.menu-slider', {
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1400: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1750: {
      spaceBetween: 40,
      slidesPerView: 3,
    }
  }
});

const swiperRecomendation = new Swiper('.recomendation__slider', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    992: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1550: {
      spaceBetween: 40,
      slidesPerView: 3,
    }
  }
});

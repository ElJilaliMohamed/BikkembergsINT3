import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs';
const $swiper = new Swiper('.swiper', {
  effect: 'cards',
  cardsEffect: {
    perSlideOffset: 6,
    perSlideRotate: 2,
    slideShadows: true,
  },
  loop: true,
});

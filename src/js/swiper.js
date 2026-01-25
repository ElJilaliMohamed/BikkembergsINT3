import Swiper from 'swiper';
import 'swiper/css/effect-cards';
const $swiper = new Swiper('.swiper', {
  effect: 'cards',
  cardsEffect: {
    perSlideOffset: 8,
    perSlideRotate: 2,
    slideShadows: true,
  },
  loop: true,
});

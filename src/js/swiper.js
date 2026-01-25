import 'swiper/css/effect-cards';
import { Navigation, Pagination } from 'swiper/modules';
const $swiper = new Swiper('.swiper', {
  effect: 'cards',
  cardsEffect: {
    perSlideOffset: 8,
    perSlideRotate: 2,
    slideShadows: true,
  },
  loop: true,
});

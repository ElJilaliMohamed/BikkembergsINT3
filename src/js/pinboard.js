const showCards = function () {
  const $photoCard = document.querySelector('.card1');
  const $calendarCard = document.querySelector('.card2');
  const $cappuccinoCard = document.querySelector('.card3');
  const $closeCards = document.querySelectorAll('.js-card-close');
  document.querySelector('.js-photo').addEventListener('click', function () {
    $photoCard.style.opacity = 1;
  });
  document.querySelector('.js-calendar').addEventListener('click', function () {
    $calendarCard.style.opacity = 1;
  });
  document.querySelector('.js-cappuccino').addEventListener('click', function () {
    $cappuccinoCard.style.opacity = 1;
  });
  for (const card of $closeCards) {
    card.addEventListener('click', function () {
      $photoCard.style.opacity = 0;
      $calendarCard.style.opacity = 0;
      $cappuccinoCard.style.opacity = 0;
    });
  }
};

const init = function () {
  showCards();
};

document.addEventListener('DOMContentLoaded', init);

const showContent = function () {
  const $clickedSketches = document.querySelector('.clicked-content');
  const $clickedRunway = document.querySelector('.clicked-content-runway');

  document.querySelector('.js-sketches').addEventListener('click', function () {

    $clickedSketches.style.display = 'block';
  });
  document.querySelector('.js-runway').addEventListener('click', function () {

    $clickedRunway.style.display = 'block';
  });

  const $closeBtns = document.querySelectorAll('.js-close');
  for (const closeBtn of $closeBtns) {
    closeBtn.addEventListener('click', function () {
      $clickedSketches.style.display = 'none';
      $clickedRunway.style.display = 'none';
    });
  }
};
const init = function () {
  showContent();
};

document.addEventListener('DOMContentLoaded', init);

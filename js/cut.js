const dragDrop = function () {
  const $scissor = document.querySelector('.js-draggable');
  const $textile = document.querySelector('.js-dropzone');
  const $partLeft = document.querySelector('.js-left');
  const $partRight = document.querySelector('.js-right');
  $scissor.addEventListener('dragstart', function () {
    this.addEventListener('drag', function () {
      this.style.cursor = 'grabbing';
    });
    $textile.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
    $textile.addEventListener('drop', function (e) {
      $partLeft.classList.add('down');
      $partRight.classList.add('up');
    });
  });
};

const init = function () {
  dragDrop();
};

document.addEventListener('DOMContentLoaded', init);

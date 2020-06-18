'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardName = document.querySelector('.setup-user-name');

  var onEscPress = function (evt) {
    if (evt.key === 'Escape' && evt.target !== wizardName) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
    setup.style = '';
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });
})();

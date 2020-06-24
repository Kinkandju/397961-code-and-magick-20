'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');
  var buttonSubmit = form.querySelector('.setup-submit');

  var successHandler = function () {
    window.addWizards.removeWizards();
    window.addWizards.renderWizards();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  var sendForm = function () {
    setup.classList.add('hidden');
    buttonSubmit.disabled = false;
    successHandler();
  };

  var showError = function (errorMessage) {
    errorHandler(errorMessage);
    buttonSubmit.disabled = false;
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();
    buttonSubmit.disabled = true;

    window.backend.save(new FormData(form), sendForm, showError);
  };

  form.addEventListener('submit', onFormSubmit);
})();

'use strict';

(function () {
  var wizardName = document.querySelector('.setup-user-name');

  wizardName.addEventListener('invalid', function () {
    if (wizardName.validity.tooShort) {
      wizardName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (wizardName.validity.tooLong) {
      wizardName.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (wizardName.validity.valueMissing) {
      wizardName.setCustomValidity('Обязательное поле');
    } else {
      wizardName.setCustomValidity('');
    }
  });
})();

'use strict';

// Данные о фаерболе
window.fireballSize = 22;
window.getFireballSpeed = function (movingLeft) {
  return movingLeft ? 5 : 2;
// var result = условие ? значение1 : значение2;
// Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.
};

// Данные о волшебнике
window.wizardWidth = 70;
window.getWizardHeight = function () {
  return 1.337 * window.wizardWidth;
};
window.wizardSpeed = 3;
window.getWizardX = function (width) {
  return (width - window.wizardWidth) / 2;
};
window.getWizardY = function (height) {
  return height / 3;
};

'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardAppearance = setup.querySelector('.setup-wizard-appearance');

  var wizardCoat = wizardAppearance.querySelector('.wizard-coat');
  var wizardEyes = wizardAppearance.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardCoatColor = wizardAppearance.querySelector('input[name="coat-color"]').value;
  var wizardEyesColor = wizardAppearance.querySelector('input[name="eyes-color"]').value;
  var wizardFireballColor = wizardFireball.querySelector('input[name="fireball-color"]').value;

  function getNextColor(colors, currentColor) {
    var currentColorIndex = colors.indexOf(currentColor);
    var nextColorIndex = currentColorIndex + 1;

    return (currentColorIndex === colors.length) ? colors[0] : colors[nextColorIndex];
  }

  window.colorWizard = {
    onCoatClick: function (color) {
      return color;
    },
    onEyesClick: function (color) {
      return color;
    }
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = getNextColor(window.setup.WIZARD_COATS, wizardCoatColor);

    wizardCoatColor = newColor;
    wizardCoat.style.fill = newColor;

    window.colorWizard.onCoatClick(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = getNextColor(window.setup.WIZARD_EYES, wizardEyesColor);

    wizardEyesColor = newColor;
    wizardEyes.style.fill = newColor;

    window.colorWizard.onEyesClick(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireballColor = getNextColor(window.setup.FAREBALL_COLORS, wizardFireballColor);
    wizardFireball.style.background = wizardFireballColor;
  });
})();

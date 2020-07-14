'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var wizardAppearance = setup.querySelector('.setup-wizard-appearance');

  var coatColor;
  var eyesColor;
  var wizards = [];

  function getNextColor(colors, currentColor) {
    var currentColorIndex = colors.indexOf(currentColor);
    var nextColorIndex = currentColorIndex + 1;

    return (currentColorIndex === colors.length - 1) ? colors[0] : colors[nextColorIndex];
  }

  function getColorRank(wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  function updateWizards() {
    var sortedWizards = function (left, right) {
      var differences = getColorRank(right) - getColorRank(left);

      if (differences === 0) {
        differences = namesComparator(left.name, right.name);
      }

      return differences;
    };

    if (wizards) {
      window.addWizards.renderWizards(wizards.sort(sortedWizards));
    }
  }

  var colorWizards = {
    onCoatClick: window.debounce(function (color) {
      coatColor = color;
      updateWizards();
    }),
    onEyesClick: window.debounce(function (color) {
      eyesColor = color;
      updateWizards();
    })
  };

  var wizardCoat = wizardAppearance.querySelector('.wizard-coat');
  var wizardCoatColor = wizardAppearance.querySelector('input[name="coat-color"]').value;

  var onCoatClick = function () {
    var newColor = getNextColor(window.setup.WIZARD_COATS, wizardCoatColor);

    wizardCoatColor = newColor;
    wizardCoat.style.fill = newColor;

    colorWizards.onCoatClick(newColor);
  };

  var wizardEyes = wizardAppearance.querySelector('.wizard-eyes');
  var wizardEyesColor = wizardAppearance.querySelector('input[name="eyes-color"]').value;

  var onEyesClick = function () {
    var newColor = getNextColor(window.setup.WIZARD_EYES, wizardEyesColor);

    wizardEyesColor = newColor;
    wizardEyes.style.fill = newColor;

    colorWizards.onEyesClick(newColor);
  };

  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var wizardFireballColor = wizardFireball.querySelector('input[name="fireball-color"]').value;

  var onFireballClick = function () {
    wizardFireballColor = getNextColor(window.setup.FAREBALL_COLORS, wizardFireballColor);
    wizardFireball.style.background = wizardFireballColor;
  };

  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  wizardFireball.addEventListener('click', onFireballClick);

  window.colorWizard = {
    successHandler: function (data) {
      wizards = data;
      updateWizards();

      setup.querySelector('.setup-similar').classList.remove('hidden');
    }
  };
})();

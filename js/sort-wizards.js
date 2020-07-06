'use strict';

(function () {
  var setup = document.querySelector('.setup');

  var coatColor;
  var eyesColor;
  var wizards = [];

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
    window.addWizards.renderWizards(wizards.sort(function (left, right) {
      var differences = getColorRank(right) - getColorRank(left);

      if (differences === 0) {
        differences = namesComparator(left.name, right.name);
      }

      return differences;
    }));
  }

  window.colorWizard = {
    onCoatClick: window.debounce(function (color) {
      coatColor = color;
      updateWizards();
    }),
    onEyesClick: window.debounce(function (color) {
      eyesColor = color;
      updateWizards();
    })
  };

  window.sortWizards = {
    successHandler: function (data) {
      wizards = data;
      updateWizards();

      setup.querySelector('.setup-similar').classList.remove('hidden');
    }
  };
})();

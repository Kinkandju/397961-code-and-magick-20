'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  window.addWizards = {
    renderWizards: function () {
      function createWizardElement(wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

        return wizardElement;
      }

      function getRandomWizards() {
        window.backend.load(function (wizardsData) {
          var wizards = [];
          wizards = wizardsData;

          var similarWizardList = document.querySelector('.setup-similar-list');
          var fragment = document.createDocumentFragment();

          for (var i = 0; i < window.setup.WIZARD_COUNT; i++) {
            fragment.appendChild(createWizardElement(wizards[i]));
          }

          similarWizardList.appendChild(fragment);

          setup.querySelector('.setup-similar').classList.remove('hidden');
        });
      }

      getRandomWizards();
    },

    removeWizards: function () {
      var wizardItems = document.querySelectorAll('.setup-similar-item');
      wizardItems.forEach(function (wizard) {
        wizard.remove();
      });
    },
  };

  window.addWizards.renderWizards();
})();

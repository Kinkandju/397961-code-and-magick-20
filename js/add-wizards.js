'use strict';

(function () {
  var setup = document.querySelector('.setup');

  function addWizards() {
    function createWizardElement(wizard) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

      return wizardElement;
    }

    function getRandomWizards() {
      var wizards = [];

      for (var i = 0; i < window.setup.WIZARD_COUNT; i++) {
        wizards.push({
          name: window.utils.getRandomName(),
          coatColor: window.utils.getRandomCoats(),
          eyesColor: window.utils.getRandomEyes()
        });
      }

      return wizards;
    }

    var similarWizardList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < getRandomWizards().length; i++) {
      fragment.appendChild(createWizardElement(getRandomWizards()[i]));
    }

    similarWizardList.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  }

  addWizards();
})();

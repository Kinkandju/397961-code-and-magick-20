'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  function createWizardElement(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }

  window.addWizards = {
    renderWizards: function (wizardsData) {
      var similarWizardList = document.querySelector('.setup-similar-list');
      var fragment = document.createDocumentFragment();

      var takeNumber = wizardsData.length > window.setup.WIZARD_COUNT ?
        window.setup.WIZARD_COUNT : wizardsData.length;

      similarWizardList.innerHTML = '';

      for (var i = 0; i < takeNumber; i++) {
        fragment.appendChild(createWizardElement(wizardsData[i]));
      }

      similarWizardList.appendChild(fragment);
    }
  };
})();

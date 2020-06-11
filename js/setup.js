'use strict';

var WIZARD_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];
var WIZARD_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var WIZARD_COUNT = 4;
var FAREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setup = document.querySelector('.setup');

function getRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function getRandomElement(elements) {
  var randomItemIndex = getRandomInteger(0, elements.length - 1);
  return elements[randomItemIndex];
}

function getRandomName() {
  return getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
}

function getRandomCoats() {
  return getRandomElement(WIZARD_COATS);
}

function getRandomEyes() {
  return getRandomElement(WIZARD_EYES);
}

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

    for (var i = 0; i < WIZARD_COUNT; i++) {
      wizards.push({
        name: getRandomName(),
        coatColor: getRandomCoats(),
        eyesColor: getRandomEyes()
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

var onCoatClick = function () {
  wizardCoatColor = getNextColor(WIZARD_COATS, wizardCoatColor);
  wizardCoat.style.fill = wizardCoatColor;
};

var onEyesClick = function () {
  wizardEyesColor = getNextColor(WIZARD_EYES, wizardEyesColor);
  wizardEyes.style.fill = wizardEyesColor;
};

var onFireballClick = function () {
  wizardFireballColor = getNextColor(FAREBALL_COLORS, wizardFireballColor);
  wizardFireball.style.background = wizardFireballColor;
};

wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
wizardFireball.addEventListener('click', onFireballClick);

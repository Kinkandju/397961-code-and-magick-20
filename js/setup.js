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

var userPopup = document.querySelector('.setup');
var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');
var wizardArray = [];

userPopup.classList.remove('hidden');

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

for (var i = 0; i < WIZARD_COUNT; i++) {
  wizardArray.push({
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COATS),
    eyesColor: getRandomElement(WIZARD_EYES)
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.eyesColor;

  return wizardElement;
};

function addWizards() {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < wizardArray.length; j++) {
    fragment.appendChild(renderWizard(wizardArray[j]));
  }

  similarWizardList.appendChild(fragment);
}

userPopup.querySelector('.setup-similar').classList.remove('hidden');

addWizards();

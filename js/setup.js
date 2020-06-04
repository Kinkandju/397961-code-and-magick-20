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

userPopup.classList.remove('hidden');

function getRandomElement(elements) {

  function getRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  var randomItemIndex = getRandomInteger(0, elements.length - 1);
  return elements[randomItemIndex];
}

var wizardArray = [];

for (var i = 0; i < WIZARD_COUNT; i++) {
  wizardArray.push({
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COATS),
    eyesColor: getRandomElement(WIZARD_EYES)
  });
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

function createWizardElement(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function addWizards() {
  var fragment = document.createDocumentFragment();

  for (var wizardIndex = 0; wizardIndex < wizardArray.length; wizardIndex++) {
    fragment.appendChild(createWizardElement(wizardArray[wizardIndex]));
  }

  similarWizardList.appendChild(fragment);

  userPopup.querySelector('.setup-similar').classList.remove('hidden');
}

addWizards();

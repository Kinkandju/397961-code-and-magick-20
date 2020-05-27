'use strict';

// Размеры игрового поля
var gameFieldWidth = 700;
var gameFieldHeight = 300;

// Данные о фаерболе
var fireballSize = 22;
function getFireballSpeed (isWindFromLeft) {
  if (isWindFromLeft) {
    return 5;
  } else {
    return 2;
  }
};

// Данные о волшебнике
var wizardWidth = 70;
var wizardHeight = 1.337 * wizardWidth;
var wizardSpeed = 3;
function getWizardX (gameFieldWidth) {
  return (gameFieldWidth - wizardWidth) / 2;
};
function getWizardY (gameFieldHeight) {
  return gameFieldHeight / 3;
};

'use strict';

(function () {

  window.utils = {
    getRandomInteger: function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    },

    getRandomElement: function (elements) {
      var randomItemIndex = window.utils.getRandomInteger(0, elements.length - 1);
      return elements[randomItemIndex];
    },

    getRandomName: function () {
      return window.utils.getRandomElement(window.setup.WIZARD_NAMES) + ' ' + window.utils.getRandomElement(window.setup.WIZARD_SURNAMES);
    },

    getRandomCoats: function () {
      return window.utils.getRandomElement(window.setup.WIZARD_COATS);
    },

    getRandomEyes: function () {
      return window.utils.getRandomElement(window.setup.WIZARD_EYES);
    }
  };
})();

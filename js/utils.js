'use strict';

(function () {
  window.utils = {
    getRandomInteger: function (min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    },

    getRandomElement: function (elements) {
      var randomItemIndex = this.getRandomInteger(0, elements.length - 1);
      return elements[randomItemIndex];
    },

    getRandomName: function () {
      return this.getRandomElement(window.setup.WIZARD_NAMES) + ' ' + this.getRandomElement(window.setup.WIZARD_SURNAMES);
    },

    getRandomCoats: function () {
      return this.getRandomElement(window.setup.WIZARD_COATS);
    },

    getRandomEyes: function () {
      return this.getRandomElement(window.setup.WIZARD_EYES);
    }
  };
})();

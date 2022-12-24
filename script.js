'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;

   this.createObj = function () {
      let obj;

      if (this.selector.charAt(0) === '.') {
         obj = document.createElement('div');
      } else if (this.selector.charAt(0) === '#') {
         obj = document.createElement('p');
      }

      obj.style.cssText = `height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;`;

      return obj;
   };
};

const newElement = new DomElement('.block', 200, 200, 'red', 20);

document.body.prepend(newElement.createObj());
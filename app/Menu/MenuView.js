import { Templater } from '../Templater.js';

export class MenuView {
  constructor() {
    this.domElem = document.querySelector('.menu');
    this.menuItems = [];
    this.templater = new Templater();
  }

  prepareData = (data) => {
    return data.map((x, i) => {
      return {
        index: i,
        name: x,
      };
    });
  };

  async render(items, onSelect) {
    this.domElem.innerHTML = '';
    console.log(this.templater);
    this.domElem.innerHTML = await this.templater.getHTML(this.prepareData(items), 'menu');
    this.addListeners(onSelect);
  };

  addListeners = (func) => {
    this.menuItems = document.querySelectorAll('[class*=item-link]');
    this.menuItems.forEach(x => {
      x.addEventListener('click', func);
    });
  };
}
import { MenuTemplate } from './MenuTemplate.js';

export class MenuView {
  constructor() {
    this.domElem = document.querySelector('.menu');
    this.menuItems = [];
    this.template = new MenuTemplate();
  }

  prepareData = (data) => {
    return data.map((x, i) => {
      return {
        menuItemIndex: i,
        menuItemName: x,
      };
    });
  };

  render(items, onSelect) {
    this.domElem.innerHTML = '';
    console.log(items);
    console.log(this.prepareData(items));
    this.domElem.innerHTML = this.template.getHtml(this.prepareData(items));
    this.addListeners(onSelect);
  };

  addListeners = (func) => {
    this.menuItems = document.querySelectorAll('[class*=item-link]');
    this.menuItems.forEach(x => {
      x.addEventListener('click', func);
    });
  };
}
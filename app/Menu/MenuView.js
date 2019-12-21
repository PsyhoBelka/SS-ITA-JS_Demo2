import { MenuTemplate } from './MenuTemplate.js';

export class MenuView {
  constructor() {
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

  addListeners = (func) => {
    this.menuItems = document.querySelectorAll('[class*=item-link]');
    this.menuItems.forEach(x => {
      x.addEventListener('click', func);
    });
  };

  render(root, items, onSelect) {
    root.insertAdjacentHTML('beforeend', this.template.getHtml(this.prepareData(items)));
    this.addListeners(onSelect);
  };


}
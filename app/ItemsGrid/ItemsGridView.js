import { ItemsGridTemplate } from './ItemsGridTemplate.js';

export class ItemsGridView {
  constructor() {
    this.domElem = document.querySelector('.items_grid');
    this.template = new ItemsGridTemplate();
  }

  render(items, onSelect) {
    this.domElem.innerHTML = '';
    this.domElem.innerHTML = this.template.getHTML(items);
    this.addListeners(onSelect);
  }

  addListeners(func) {
    this.menuItems = document.querySelectorAll('[class*=item_id]');
    //todo use map().join()
    this.menuItems.forEach(x => {
      x.addEventListener('click', func);
    });
  };
}
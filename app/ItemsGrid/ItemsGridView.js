import { ItemsGridTemplate } from './ItemsGridTemplate.js';

export class ItemsGridView {
  constructor() {
    this.template = new ItemsGridTemplate();
  }

  render(root, items, onSelect) {
    root.insertAdjacentHTML('beforeend', this.template.getHTML(items));
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
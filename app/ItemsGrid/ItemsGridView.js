import { ItemsGridTemplate } from './ItemsGridTemplate.js';

export class ItemsGridView {
  constructor() {
    this.template = new ItemsGridTemplate();
  }

  render(root, items, { buyClick, detailsClick }) {
    root.insertAdjacentHTML('beforeend', this.template.getHTML(items));
    this.addParentListener(items, buyClick, detailsClick);
  }

  addParentListener(items, buyClick, detailsClick) {
    document.querySelector('.content_grid').addEventListener('click', (ev) => {
      this.findElementAndCallFunc(ev, { items: items, buyClick: buyClick, detailsClick: detailsClick });
    });
  }

  findElementAndCallFunc(ev, { items, buyClick, detailsClick }) {
    const elemId = ev.target.classList.value.match(/(?<=item_id_)[0-9]+/g);
    if (elemId) {
      const data = items.find(x => x.id === +elemId);
      console.log(data);
      switch (ev.target.innerText.toLowerCase()) {
        case 'details':
          detailsClick(data);
          break;
        case 'buy':
          buyClick(data);
          break;
      }
    }
  }
}
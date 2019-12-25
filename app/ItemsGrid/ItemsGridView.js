import { DEFAULT_ITEMS_ON_PAGE } from '../utils/config.js';
import { ItemsGridTemplate } from './ItemsGridTemplate.js';

export class ItemsGridView {
  constructor() {
    this.template = new ItemsGridTemplate();
  }

  render({ data, currentPage, buyClick, detailsClick }) {
    let gridDom = document.querySelector('.content_grid');
    let pagedData = data.slice((currentPage - 1) * DEFAULT_ITEMS_ON_PAGE, currentPage * DEFAULT_ITEMS_ON_PAGE);

    if (!gridDom) {
      document.querySelector('.app_root').insertAdjacentElement('beforeend', this.createDomNode(this.template.getHTML(pagedData)));
    } else {
      gridDom.replaceWith(this.createDomNode(this.template.getHTML(pagedData)));
    }

    this.addParentListener(pagedData, buyClick, detailsClick);
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

  createDomNode(str) {
    let gridDom = document.createElement('div');

    gridDom.classList.add('content_grid', 'uk-flex', 'uk-flex-center', 'uk-flex-middle', 'uk-flex-wrap');
    gridDom.setAttribute('uk-margin', '');
    gridDom.insertAdjacentHTML('afterbegin', str);

    return gridDom;
  }
}
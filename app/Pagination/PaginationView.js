import { DEFAULT_ITEMS_ON_PAGE } from '../utils/config.js';
import { PaginationTemplate } from './PaginationTemplate.js';

export class PaginationView {

  render({ data, currentPage, pageNumClick }) {
    this.data = data;
    let paginationDom = document.querySelectorAll('.pagination');
    if (paginationDom.length === 0) {
      document.querySelector('.app_root').insertAdjacentHTML('beforeend', PaginationTemplate.getHTML(this.calculatePages(this.data), currentPage));
    } else {
      paginationDom.forEach(x => {
        x.replaceWith(this.createDomNode(PaginationTemplate.getHTML(this.calculatePages(this.data), currentPage)));
      });
    }
    document.querySelectorAll('.pagination').forEach(x => {
      x.addEventListener('click', pageNumClick);
    });
  }

  calculatePages() {
    return Math.round(this.data.length / DEFAULT_ITEMS_ON_PAGE);
  }

  createDomNode(str) {
    let dom = document.createElement('div');

    dom.insertAdjacentHTML('afterbegin', str);

    return dom.firstElementChild;
  }

  clone(clickHandler) {
    let clone = document.querySelector('.pagination').cloneNode(true);
    clone.addEventListener('click', clickHandler);
    document.querySelector('.app_root').insertAdjacentElement('beforeend', clone);
  }
}
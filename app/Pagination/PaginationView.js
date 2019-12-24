import { DEFAULT_ITEMS_ON_PAGE } from '../utils/config.js';
import { PaginationTemplate } from './PaginationTemplate.js';

export class PaginationView {
  constructor(data) {
    this.data = data;
  }

  render({ currentPage, pageNumClick }) {
    let paginationDom = document.querySelector('.pagination');
    if (!paginationDom) {
      document.querySelector('.app_root').insertAdjacentHTML('beforeend', PaginationTemplate.getHTML(this.calculatePages(this.data), currentPage));
    } else {
      document.querySelectorAll('.pagination').forEach(x => {
        x.replaceWith(this.createDomNode(PaginationTemplate.getHTML(this.calculatePages(this.data), currentPage)));
      });
      document.querySelectorAll('.pagination').forEach(x => {
        x.addEventListener('click', pageNumClick);
      });
    }
    // document.querySelector('.pagination').addEventListener('click', pageNumClick);
  }

  calculatePages() {
    return Math.round(this.data.length / DEFAULT_ITEMS_ON_PAGE);
  }

  createDomNode(str) {
    let dom = document.createElement('div');

    dom.classList.add('pagination', 'uk-flex', 'uk-flex-center', 'uk-margin');
    dom.insertAdjacentHTML('afterbegin', str);

    return dom;
  }

  clone(clickHandler) {
    let clone = document.querySelector('.pagination').cloneNode(true);
    clone.addEventListener('click', clickHandler);
    document.querySelector('.app_root').insertAdjacentElement('beforeend', clone);
    document.querySelectorAll('.pagination').forEach(x => {
      x.addEventListener('click', clickHandler);
    });
  }
}
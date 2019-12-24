import { DEFAULT_ITEMS_ON_PAGE } from '../utils/config.js';
import { PaginationTemplate } from './PaginationTemplate.js';

export class PaginationView {
  constructor(data) {
    this.data = data;
  }

  render({ currentPage, nextClick, pageNumClick, prevClick }) {
    let paginationDom = document.querySelector('.pagination');
    if (!paginationDom) {
      document.querySelector('.app_root').insertAdjacentHTML('beforeend', PaginationTemplate.getHTML(this.calculatePages(this.data), currentPage));
    } else {
      document.querySelectorAll('.pagination').forEach(x => {
        x.replaceWith(this.createDomNode(PaginationTemplate.getHTML(this.calculatePages(this.data), currentPage)));
      });
    }
    this.addEventListeners(prevClick, pageNumClick, nextClick);
  }

  addEventListeners(prevClick, pageClick, nextClick) {
    document.querySelector('.prev_button').addEventListener('click', prevClick);
    document.querySelector('.pagination').addEventListener('click', pageClick);
    document.querySelector('.next_button').addEventListener('click', nextClick);
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

  clone() {
    return document.querySelector('.pagination').cloneNode(true);
  }
}
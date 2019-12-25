import { Observer } from '../utils/Observer.js';
import { SearchFilterTemplate } from './SearchFilterTemplate.js';

export class SearchFilterView {

  render({ inputHandler }) {
    let elemDom = document.querySelector('.search_filter');
    if (!elemDom) {
      document.querySelector('.app_root').insertAdjacentHTML('beforeend', SearchFilterTemplate.getHTML());
    } else {

    }
    document.querySelector('.search_filter').addEventListener('keydown', inputHandler);
    document.querySelector('.search__clear_input').addEventListener('click', this.clearInputClickHandler);
  }

  clearInputClickHandler(ev) {
    document.querySelector('.search_input').value = '';
    Observer.notify('clear-search-input', '');
  }
}
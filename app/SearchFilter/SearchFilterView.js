import { Observer } from '../utils/Observer.js';
import { SearchFilterTemplate } from './SearchFilterTemplate.js';

export class SearchFilterView {

  render() {
    let elemDom = document.querySelector('.search_filter');
    if (!elemDom) {
      document.querySelector('.app_root').insertAdjacentHTML('beforeend', SearchFilterTemplate.getHTML());
    }
    document.querySelector('.search_filter').addEventListener('keydown', this.searchInputEnterPressHandler);
    document.querySelector('.search__clear_input').addEventListener('click', this.clearInputClickHandler);
  }

  searchInputEnterPressHandler(ev) {
    Observer.notify('search-input', ev);
  }

  clearInputClickHandler() {
    document.querySelector('.search_input').value = '';
    Observer.notify('clear-search-input', '');
  }
}
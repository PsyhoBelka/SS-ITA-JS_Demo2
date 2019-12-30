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
    document.querySelector('.select_sort').addEventListener('change', this.changeSortSelectHandler);
  }

  searchInputEnterPressHandler(ev) {
    Observer.notify('search-input', ev);
  }

  clearInputClickHandler() {
    document.querySelector('.search_input').value = '';
    document.querySelector('.select_sort').value = 'default';
    Observer.notify('clear-search-input', '');
  }

  changeSortSelectHandler(ev) {
    Observer.notify('change-sort', ev);
  }
}
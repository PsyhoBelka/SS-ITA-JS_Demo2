import { SearchFilterTemplate } from './SearchFilterTemplate.js';

export class SearchFilterView {

  render({ inputHandler }) {
    let elemDom = document.querySelector('.search_filter');
    if (!elemDom) {
      document.querySelector('.app_root').insertAdjacentHTML('beforeend', SearchFilterTemplate.getHTML());
    } else {

    }
    elemDom = document.querySelector('.search_filter');
    elemDom.addEventListener('keydown', inputHandler);
  }
}
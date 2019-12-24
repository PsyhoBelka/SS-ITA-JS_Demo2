import { SearchFilterTemplate } from './SearchFilterTemplate.js';

export class SearchFilterView {

  render() {
    let elemDom = document.querySelector('.search_filter');
    if (!elemDom) {
      document.querySelector('.app_root').insertAdjacentHTML('beforeend', SearchFilterTemplate.getHTML());
    } else {

    }
    elemDom = document.querySelector('.search_filter');
    elemDom.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        console.log(ev);
      }
    }, false);
  }
}
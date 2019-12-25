import { SearchFilterView } from './SearchFilterView.js';

export class SearchFilterController {
  constructor() {
    this.view = new SearchFilterView();
  }

  showSearchFilter() {
    this.view.render();
  }


  filterSelectHandler() {
  }

}
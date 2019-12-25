import { SearchFilterView } from './SearchFilterView.js';

export class SearchFilterController {
  constructor() {
    this.view = new SearchFilterView();
  }

  showSearchFilter(searchInputHandler) {
    this.view.render({ inputHandler: searchInputHandler });
  }


  filterSelectHandler() {
  }

}
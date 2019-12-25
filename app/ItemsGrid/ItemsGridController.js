import { PaginationController } from '../Pagination/PaginationController.js';
import { SearchFilterController } from '../SearchFilter/SearchFilterController.js';
import { DEFAULT_PAGE_NUMBER_ON_START } from '../utils/config.js';
import { Observer } from '../utils/Observer.js';
import { ItemsGridModel } from './ItemsGridModel.js';
import { ItemsGridView } from './ItemsGridView.js';

export class ItemsGridController {
  constructor() {
    this.model = new ItemsGridModel(localStorage.getItem('animals'));
    this.view = new ItemsGridView();
    this.paginationController = new PaginationController();
    this.searchFilterController = new SearchFilterController();
    this.duplicatePagination = true;
    Observer.subscribe('page-change', this.showGrid);
    Observer.subscribe('clear-search-input', this.clearSearchInputHandler);
    Observer.subscribe('search-input', this.searchInputHandler);
  }

  showGrid = ({ dataToShow, currentPage }) => {
    let data = !dataToShow ? this.model.getItems() : dataToShow;

    if (!currentPage) {
      currentPage = DEFAULT_PAGE_NUMBER_ON_START;
    }
    this.searchFilterController.showSearchFilter();
    this.paginationController.showPagination({ data, page: currentPage });
    this.view.render({
      currentPage: currentPage,
      data: data,
      buyClick: this.buyButtonClickHandler,
      detailsClick: this.detailsButtonClickHandler,
    });
    if (this.duplicatePagination) {
      this.paginationController.clone();
      this.duplicatePagination = false;
    }
  };

  searchInputHandler = (ev) => {
    let filteredData;
    let key = ev.key;
    let inputValue = ev.target.value.toLowerCase();

    if (inputValue === '') {
      filteredData = this.model.getItems();
    } else {
      filteredData = this.model.items.filter(x => {
        return (x.species.includes(inputValue) || x.breed.includes(inputValue));
      });
    }
    if (key === 'Enter') {
      ev.preventDefault();
      this.showGrid({ dataToShow: filteredData });
    }
  };

  clearSearchInputHandler = () => {
    this.showGrid({ dataToShow: this.model.getItems() });
  };

  buyButtonClickHandler = (data) => {
    console.log('buy button click', data);
  };

  detailsButtonClickHandler = (data) => {
    Observer.notify('details-button-click', data);
  };
}
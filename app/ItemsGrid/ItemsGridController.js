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
    Observer.subscribe('change-sort', this.changeSortHandler);
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

    if (inputValue !== '') {
      this.model.items = this.model.getItems().filter(x => {
        return (x.species.includes(inputValue) || x.breed.includes(inputValue));
      });
    }
    if (key === 'Enter') {
      ev.preventDefault();
      this.showGrid({ dataToShow: this.model.items });
    }
  };

  clearSearchInputHandler = () => {
    this.showGrid({ dataToShow: this.model.getItems() });
  };

  buyButtonClickHandler = (data) => {
    console.log('buy button click', data);
    Observer.notify('buy-button-click', data);
  };

  detailsButtonClickHandler = (data) => {
    Observer.notify('details-button-click', data);
  };

  changeSortHandler = (ev) => {
    const sortType = ev.target.value;
    // let dataToShow = [...this.model.items];

    switch (sortType) {
      case 'price_asc': {
        this.model.items.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      }
      case 'price_desc': {
        this.model.items.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      }
      case 'age_asc': {
        this.model.items.sort((a, b) => {
          return b.birth_date - a.birth_date;
        });
        break;
      }
      case 'age_desc': {
        this.model.items.sort((a, b) => {
          return a.birth_date - b.birth_date;
        });
        break;
      }
    }
    this.showGrid({ dataToShow: this.model.items });
  };
}
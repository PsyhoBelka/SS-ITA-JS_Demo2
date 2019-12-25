import { PaginationController } from '../Pagination/PaginationController.js';
import { SearchFilterController } from '../SearchFilter/SearchFilterController.js';
import { DEFAULT_PAGE_NUMBER_ON_START } from '../utils/config.js';
import { Observer } from '../utils/Observer.js';
import { ItemsGridModel } from './ItemsGridModel.js';
import { ItemsGridView } from './ItemsGridView.js';

export class ItemsGridController {
  constructor(modalController) {
    this.model = new ItemsGridModel(localStorage.getItem('animals'));
    this.view = new ItemsGridView();
    this.modalController = modalController;
    this.paginationController = new PaginationController();
    this.searchFilterController = new SearchFilterController();
    this.duplicatePagination = true;
    Observer.subscribe('page-change', this.showGrid);
  }

  showGrid = ({ dataToShow, currentPage }) => {
    let data = !dataToShow ? this.model.getItems() : dataToShow;

    if (!currentPage) {
      currentPage = DEFAULT_PAGE_NUMBER_ON_START;
    }
    this.searchFilterController.showSearchFilter(this.searchInputHandler);
    this.paginationController.showPagination(data);
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
    if (ev.key === 'Enter') {
      ev.preventDefault();
      console.log(ev);

    }
  };

  buyButtonClickHandler = (data) => {
    console.log('buy button click', data);
  };

  detailsButtonClickHandler = (data) => {
    console.log('details button clock', data);
    this.modalController.showModal(data);
  };
}
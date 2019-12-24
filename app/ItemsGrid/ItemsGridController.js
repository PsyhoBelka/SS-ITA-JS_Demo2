import { DEFAULT_PAGE_NUMBER_ON_START } from '../utils/config.js';
import { Observer } from '../utils/Observer.js';
import { ItemsGridModel } from './ItemsGridModel.js';
import { ItemsGridView } from './ItemsGridView.js';

export class ItemsGridController {
  constructor(modalController) {
    this.model = new ItemsGridModel(localStorage.getItem('animals'));
    this.view = new ItemsGridView();
    this.modalController = modalController;
    this.currentPage = DEFAULT_PAGE_NUMBER_ON_START;
    Observer.subscribe('page-change', this.showGrid);
  }

  showGrid = (currentPage = this.currentPage) => {
    let data = this.model.getItems();
    if (!currentPage) {
      currentPage = DEFAULT_PAGE_NUMBER_ON_START;
    }

    this.view.render({
      currentPage: currentPage,
      data: data,
      buyClick: this.buyButtonClickHandler,
      detailsClick: this.detailsButtonClickHandler,
    });
  };

  buyButtonClickHandler = (data) => {
    console.log('buy button click', data);
  };

  detailsButtonClickHandler = (data) => {
    console.log('details button clock', data);
    this.modalController.showModal(data);
  };
}
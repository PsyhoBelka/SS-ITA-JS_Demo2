import { ItemsGridModel } from './ItemsGridModel.js';
import { ItemsGridView } from './ItemsGridView.js';

export class ItemsGridController {
  constructor(modalController) {
    this.model = new ItemsGridModel();
    this.view = new ItemsGridView();
    this.modalController = modalController;
    this.currentPage = 1;
    this.pageCount = 20;
  }

  async showGrid(root, currentPage) {
    await this.model.getItems()
      .then(data => {
        if (!currentPage) {
          currentPage = this.currentPage;
        }
        else {
          this.currentPage = currentPage;
        }
        let pagedData = data.slice((currentPage - 1) * this.pageCount, currentPage * this.pageCount);
        console.log(pagedData);
        this.view.render(root, pagedData, {
          buyClick: this.buyButtonClickHandler,
          detailsClick: this.detailsButtonClickHandler,
        });
      });
    console.log(this.currentPage);
  };

  buyButtonClickHandler = (data) => {
    console.log('buy button click', data);
  };

  detailsButtonClickHandler = (data) => {
    console.log('details button clock', data);
    this.modalController.showModal(data);
  };
}
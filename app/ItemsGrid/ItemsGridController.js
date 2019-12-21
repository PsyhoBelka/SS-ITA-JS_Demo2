import { ItemsGridModel } from './ItemsGridModel.js';
import { ItemsGridView } from './ItemsGridView.js';

export class ItemsGridController {
  constructor(modalController) {
    this.model = new ItemsGridModel();
    this.view = new ItemsGridView();
    this.modalController = modalController;
  }

  async showGrid(root) {
    await this.model.getItems()
      .then(json => this.view.render(root, json, {
        buyClick: this.buyButtonClickHandler,
        detailsClick: this.detailsButtonClickHandler,
      }));
  };

  buyButtonClickHandler = (data) => {
    console.log('buy button click', data);
  };

  detailsButtonClickHandler = (data) => {
    console.log('details button clock', data);
    this.modalController.showModal(data);
  };
}
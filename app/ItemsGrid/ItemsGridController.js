import { ItemsGridModel } from './ItemsGridModel.js';
import { ItemsGridView } from './ItemsGridView.js';

export class ItemsGridController {
  constructor() {
    this.model = new ItemsGridModel();
    this.view = new ItemsGridView();
  }

  async showGrid(root) {
    await this.model.getItems()
      .then(json => this.view.render(root, json, this.selectCategory));
  };

  selectCategory(ev) {
    console.log(ev);
    console.log(`You select ${ev.target.innerText}`);
  };
}
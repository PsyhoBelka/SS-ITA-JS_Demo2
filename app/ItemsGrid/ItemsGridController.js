import { ItemsGridModel } from './ItemsGridModel.js';
import { ItemsGridView } from './ItemsGridView.js';

export class ItemsGridController {
  constructor() {
    this.model = new ItemsGridModel();
    this.view = new ItemsGridView();
  }

  showGrid() {
    this.model.getItems()
      .then(json => this.view.render(json.animals, this.selectCategory));
  };

  selectCategory(ev) {
    console.log(`You select ${ev.target.innerText}`);
  };
}
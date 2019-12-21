import { MenuModel } from './MenuModel.js';
import { MenuView } from './MenuView.js';

export class MenuController {
  constructor({ notify }) {
    this.model = new MenuModel();
    this.view = new MenuView();
    this.notify = notify;
  }

  async showMenu(root) {
    await this.model.getItems()
      .then(json => this.view.render(root, json.categories, this.selectCategory));
  };

  selectCategory(ev) {
    console.log(`You select ${ev.target.innerText}`);
  };
}
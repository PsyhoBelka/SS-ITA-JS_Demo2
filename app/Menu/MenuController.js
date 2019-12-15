import { MenuModel } from './MenuModel.js';
import { MenuView } from './MenuView.js';

export class MenuController {
  constructor() {
    this.model = new MenuModel();
    this.view = new MenuView();
  }

  showMenu = () => {
    this.model.getItems()
      .then(json => this.view.render(json.categories, this.selectCategory));
  };

  selectCategory = (ev) => {
    console.log(this);
    console.log(ev);
    console.log(ev.target);
  };
}
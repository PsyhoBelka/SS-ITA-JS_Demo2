import { Observer } from '../../utils/Observer.js';
import { CartModalView } from './CartModalView.js';

export class CartModalController {
  constructor(model) {
    this.model = model;
    this.view = new CartModalView();
    Observer.subscribe('clear-button-click', this.showCart);
    Observer.subscribe('clear-button-click', this.view.closeButtonClickHandler);
  }

  showCart = () => {
    this.view.render({ totals: this.model.getTotals(), data: this.model.items });
  };
}
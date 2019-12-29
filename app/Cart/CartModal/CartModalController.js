import { Observer } from '../../utils/Observer.js';
import { CartModalView } from './CartModalView.js';

export class CartModalController {
  constructor(model) {
    this.model = model;
    this.view = new CartModalView();
    Observer.subscribe('buy-button-click', this.addToCart);
    Observer.subscribe('clear-button-click', this.clearCart);
    Observer.subscribe('finish-order', this.confirmCart);
  }

  showCart = () => {
    this.view.render({ totals: this.model.getTotals(), data: this.model.items });
  };

  addToCart = (item) => {
    this.model.items.push(item);
  };

  clearCart = () => {
    this.model.items = [];
  };

  confirmCart = () => {
    //  send message with cart items
    this.clearCart();
  };
}
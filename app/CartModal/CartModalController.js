import { Observer } from '../utils/Observer.js';
import { CartModalModel } from './CartModalModel.js';
import { CartModalView } from './CartModalView.js';

export class CartModalController {
  constructor() {
    this.model = new CartModalModel();
    this.view = new CartModalView();
    Observer.subscribe('buy-button-click', this.addToCart);
    Observer.subscribe('clear-button-click', this.clearCart);
    Observer.subscribe('show-cart', this.showCart);
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
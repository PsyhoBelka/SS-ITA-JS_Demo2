import { Observer } from '../utils/Observer.js';
import { CartLinkController } from './CartLink/CartLinkController.js';
import { CartModalController } from './CartModal/CartModalController.js';
import { CartModel } from './CartModel.js';

export class CartController {
  constructor() {
    this.model = new CartModel();
    this.cartLinkController = new CartLinkController(this.model);
    this.cartModalController = new CartModalController(this.model);
    Observer.subscribe('header-load', this.renderLink);
    Observer.subscribe('show-cart', this.renderModal);
  }

  renderLink = () => {
    this.cartLinkController.showCartLink(this.model.items.length);
  };

  renderModal = () => {
    this.cartModalController.showCart();
  };
}
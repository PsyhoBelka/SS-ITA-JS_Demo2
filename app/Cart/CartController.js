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
    Observer.subscribe('buy-button-click', this.addToCart);
    Observer.subscribe('clear-button-click', this.clearCart);
    Observer.subscribe('finish-order', this.confirmCart);
    Observer.subscribe('cart-item-count-change', this.cartItemCountChange);
  }

  renderLink = () => {
    this.cartLinkController.showCartLink(this.model.items.length);
  };

  renderModal = () => {
    this.cartModalController.showCart();
  };

  addToCart = (item) => {
    console.log(item);
    // this.model.items.push({ item, count: 1 });
    this.model.addItem({ item, count: 1 });
    Observer.notify('cart-change', null);
  };

  clearCart = () => {
    this.model.items = [];
    Observer.notify('cart-change', null);
  };

  confirmCart = () => {
    //  send message with cart items
    this.clearCart();
  };

  cartItemCountChange = (data) => {
    this.model.changeItemCount(data);
    this.renderModal();
  };
}
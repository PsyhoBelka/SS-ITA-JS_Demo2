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
    this.model.addItem({ item, count: 1 });
    Observer.notify('cart-change', null);
  };

  clearCart = () => {
    this.model.items = [];
    Observer.notify('cart-change', null);
  };

  confirmCart = () => {
    if (this.model.items.length > 0) {
      const validateCustomerData = this.cartModalController.view.validateCustomerData();
      if (validateCustomerData.valid) {
        // Bot.sendOrderMsg(this.model.items).then(() => {
        this.clearCart();
        UIkit.notification({
          message: '<span uk-icon="icon: check"></span>&nbsp;Order sent to admin!',
          status: 'success',
          pos: 'top-right',
          timeout: 3000,
        });
        this.cartModalController.view.closeButtonClickHandler();
        // });
      } else {
        UIkit.notification({
          message: '<span uk-icon="icon: warning"></span>&nbsp;Check you data!',
          status: 'warning',
          pos: 'top-right',
          timeout: 3000,
        });
      }
    } else {
      UIkit.notification({
        message: '<span uk-icon="icon: warning"></span>&nbsp;Cart is empty!',
        status: 'warning',
        pos: 'top-right',
        timeout: 3000,
      });
    }
  };

  cartItemCountChange = (data) => {
    this.model.changeItemCount(data);
    this.renderModal();
  };


}
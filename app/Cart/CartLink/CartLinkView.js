import { Observer } from '../../utils/Observer.js';
import { CartLinkTemplate } from './CartLinkTemplate.js';

export class CartLinkView {
  render(cartSize) {
    const dom = document.querySelector('.cart_container');
    dom.innerHTML = CartLinkTemplate.getHTML(cartSize);
    document.querySelector('.cart_container__link').addEventListener('click', this.cartLinkClickHandler);
  }

  cartLinkClickHandler() {
    Observer.notify('show-cart', null);
  }
}
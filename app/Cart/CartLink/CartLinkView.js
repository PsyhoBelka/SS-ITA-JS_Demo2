import { Observer } from '../../utils/Observer.js';
import { CartLinkTemplate } from './CartLinkTemplate.js';

export class CartLinkView {
  render(cartSize) {
    document.querySelector('.cart_container').insertAdjacentHTML('beforeend', CartLinkTemplate.getHTML(cartSize));
    document.querySelector('.cart_container__link').addEventListener('click', this.cartLinkClickHandler);
  }

  cartLinkClickHandler() {
    console.log('cart link clicked!');
    Observer.notify('show-cart', null);
  }
}
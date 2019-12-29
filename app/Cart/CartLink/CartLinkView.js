import { Observer } from '../../utils/Observer.js';
import { CartLinkTemplate } from './CartLinkTemplate.js';

export class CartLinkView {
  render(cartSize) {
    const dom = document.querySelector('.cart_container');
    dom.innerHTML = CartLinkTemplate.getHTML(cartSize);
    document.querySelector('.cart_container__link').addEventListener('click', this.cartLinkClickHandler);
  }

  cartLinkClickHandler() {
    console.log('cart link clicked!');
    Observer.notify('show-cart', null);
  }

  createDom(str) {
    const dom = document.createElement('div');
    dom.insertAdjacentHTML('afterbegin', str);
    return dom.firstElementChild;
  }
}
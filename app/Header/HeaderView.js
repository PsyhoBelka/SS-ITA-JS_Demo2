import { Observer } from '../utils/Observer.js';
import { HeaderTemplate } from './HeaderTemplate.js';

export class HeaderView {

  render() {
    let headerDom = document.querySelector('.header');
    if (!headerDom) {
      document.querySelector('.app_root').insertAdjacentElement('beforeend', this.createDomNode(HeaderTemplate.getHTML()));
    } else {
      document.querySelector('.header').replaceWith(this.createDomNode(HeaderTemplate.getHTML()));
    }

    document.querySelector('.cart_link').addEventListener('click', this.cartClickHandler);
  }

  createDomNode(str) {
    const dom = document.createElement('div');

    dom.insertAdjacentHTML('afterbegin', str);

    return dom.firstElementChild;
  }

  cartClickHandler() {
    Observer.notify('show-cart', null);
  }
}
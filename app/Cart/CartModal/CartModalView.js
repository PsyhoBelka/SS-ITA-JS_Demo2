import { CartModalTemplate } from './CartModalTemplate.js';

export class CartModalView {
  render(data) {
    let dom = document.querySelector('.cart_modal');
    dom.innerHTML = '';
    dom.insertAdjacentElement('afterbegin', this.createDom(CartModalTemplate.getHTML(data)));
  }

  createDom(str) {
    let dom = document.createElement('div');
    dom.insertAdjacentHTML('afterbegin', str);
    return dom.firstElementChild;
  }
}
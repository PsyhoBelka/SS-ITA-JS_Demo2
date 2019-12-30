import { Observer } from '../../utils/Observer.js';
import { CartModalTemplate } from './CartModalTemplate.js';

export class CartModalView {
  render(data) {
    let dom = document.querySelector('.cart_modal');
    dom.innerHTML = CartModalTemplate.getHTML(data);
    this.addEventListeners();
  }

  addEventListeners() {
    document.querySelector('.cart_button__clear').addEventListener('click', this.clearButtonClickHandler);
    document.querySelector('.cart_button__finish').addEventListener('click', this.finishButtonClickHandler);
    document.querySelector('.cart_button__close').addEventListener('click', this.closeButtonClickHandler);
    document.querySelector('.cart_table__content').addEventListener('change', this.changeInputHandler);
  }

  changeInputHandler = (ev) => {
    let itemId = ev.target.parentElement.parentElement.classList[0].match(/(?<=cart-item-)[0-9]+/g)[0];
    Observer.notify('cart-item-count-change', { itemId, count: ev.target.value });
  };

  clearButtonClickHandler = () => {
    Observer.notify('clear-button-click', null);
  };

  finishButtonClickHandler = () => {
    Observer.notify('finish-order', null);
    this.closeButtonClickHandler();
  };

  closeButtonClickHandler = () => {
    const element = document.querySelector('.cart_modal');

    document.body.style.removeProperty('overflow-y');
    document.documentElement.classList.remove('uk-modal-page');
    element.style.removeProperty('display');
    element.classList.remove('uk-open');
    element.innerHTML = '';
  };
}
import { CartModalTemplate } from './CartModalTemplate.js';

export class CartModalView {
  render(data) {
    let dom = document.querySelector('.cart_modal');
    dom.innerHTML = '';
    dom.insertAdjacentElement('afterbegin', this.createDom(CartModalTemplate.getHTML(data)));
    this.addButtonListeners();
  }

  createDom(str) {
    let dom = document.createElement('div');
    dom.insertAdjacentHTML('afterbegin', str);
    return dom.firstElementChild;
  }

  addButtonListeners() {
    document.querySelector('.cart_button__clear').addEventListener('click', this.clearButtonClickHandler);
    document.querySelector('.cart_button__finish').addEventListener('click', this.finishButtonClickHandler);
    document.querySelector('.cart_button__close').addEventListener('click', this.closeButtonClickHandler);
  }

  clearButtonClickHandler() {
    console.log('clear click');
  }

  finishButtonClickHandler() {
    console.log('finish click');
  }

  closeButtonClickHandler() {
    const element = document.querySelector('.cart_modal');

    document.body.style.removeProperty('overflow-y');
    document.documentElement.classList.remove('uk-modal-page');
    element.style.removeProperty('display');
    element.classList.remove('uk-open');
    element.innerHTML = '';
  }
}
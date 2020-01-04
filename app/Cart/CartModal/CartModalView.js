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
    const itemId = ev.target.parentElement.parentElement.classList[0].match(/(?<=cart-item-)[0-9]+/g)[0];
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

  validateCustomerData() {
    let isValid = 5;
    const customerName = document.querySelector('.customer_details__name');
    const customerPhone = document.querySelector('.customer_details__phone');
    const customerEmail = document.querySelector('.customer_details__email');
    const customerAddress = document.querySelector('.customer_details__address');
    const customerNotes = document.querySelector('.customer_details__notes');
    const formDanger = 'uk-form-danger';

    if (!customerName.value.match(/(([a-zA-Z]+)\s?){1,3}/g)) {
      customerName.classList.add(formDanger);
      isValid--;
    } else {
      customerName.classList.contains(formDanger) ? customerName.classList.remove(formDanger) : null;
    }

    if (customerAddress.value === '') {
      customerAddress.classList.add(formDanger);
      isValid--;
    } else {
      customerAddress.classList.contains(formDanger) ? customerAddress.classList.remove(formDanger) : null;
    }


    debugger;
    return isValid === 5 ? {
      valid: true,
      customerData: { customerName, customerAddress, customerEmail, customerPhone, customerNotes },
    } : { valid: false };
  }
}
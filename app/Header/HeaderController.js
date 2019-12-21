import { HeaderView } from './HeaderView.js';

export class HeaderController {
  constructor() {
    this.view = new HeaderView();
  }

  cartClickHandler() {
    console.log('click cart link');
  }

  loginClickHandler() {
    console.log('click login link');
  }

  showHeader(root) {
    root.insertAdjacentHTML('beforeend', this.view.render());
    this.view.addEventListeners({ cart: this.cartClickHandler, login: this.loginClickHandler });
  }

}
import { Observer } from '../../utils/Observer.js';
import { CartLinkView } from './CartLinkView.js';

export class CartLinkController {
  constructor(model) {
    this.model = model;
    this.view = new CartLinkView();
    Observer.subscribe('cart-change', this.showCartLink);
  }

  showCartLink = () => {
    this.view.render(this.model.getSize());
  };
}
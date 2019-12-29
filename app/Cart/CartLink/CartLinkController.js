import { CartLinkView } from './CartLinkView.js';

export class CartLinkController {
  constructor(model) {
    this.model = model;
    this.view = new CartLinkView();
  }

  showCartLink() {
    this.view.render(this.model.items.length);
  }
}
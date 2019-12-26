import { CartModalTemplate } from './CartModalTemplate.js';

export class CartModalView {
  render(data) {
    CartModalTemplate.getHTML(data);
  }
}
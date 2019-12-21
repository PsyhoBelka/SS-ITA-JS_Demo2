import { FooterView } from './FooterView.js';

export class FooterController {
  constructor() {
    this.view = new FooterView();
  }

  showFooter(root) {
    this.view.render(root);
  }
}
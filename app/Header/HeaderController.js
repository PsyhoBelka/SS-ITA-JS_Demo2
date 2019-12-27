import { HeaderView } from './HeaderView.js';

export class HeaderController {
  constructor() {
    this.view = new HeaderView();
  }

  showHeader() {
    this.view.render();
  }

}
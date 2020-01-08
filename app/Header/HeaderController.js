import { Observer } from '../utils/Observer.js';
import { HeaderView } from './HeaderView.js';

export class HeaderController {
  constructor() {
    this.view = new HeaderView();
  }

  showHeader() {
    this.view.render();
    Observer.notify('header-load', null);
  }

}
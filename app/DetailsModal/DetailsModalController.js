import { Observer } from '../utils/Observer.js';
import { DetailsModalView } from './DetailsModalView.js';

export class DetailsModalController {
  constructor() {
    this.view = new DetailsModalView();
    Observer.subscribe('details-button-click', this.showModal);
  }

  showModal = (data) => {
    this.view.render(data);
  }
}
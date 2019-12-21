import { DetailsModalView } from './DetailsModalView.js';

export class DetailsModalController {
  constructor() {
    this.view = new DetailsModalView();
  }

  showModal(data) {
    this.view.render(data);
  }
}
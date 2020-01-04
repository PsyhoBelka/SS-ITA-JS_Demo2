import { Observer } from '../utils/Observer.js';
import { DetailsModalModel } from './DetailsModalModel.js';
import { DetailsModalView } from './DetailsModalView.js';

export class DetailsModalController {
  constructor() {
    this.view = new DetailsModalView();
    this.model = new DetailsModalModel();
    Observer.subscribe('details-button-click', this.showModal);
    Observer.subscribe('details-buy-button-click', this.buyFromDetails);
  }

  showModal = (data) => {
    this.model.data = data;
    this.view.render(this.model.data);
  };

  buyFromDetails = () => {
    console.log(this.model.data);
    Observer.notify('buy-button-click', this.model.data);
    UIkit.notification({
      message: '<span uk-icon="icon: check"></span>Pet added to cart!',
      status: 'success',
      pos: 'top-right',
      timeout: 3000,
    });
  };
}
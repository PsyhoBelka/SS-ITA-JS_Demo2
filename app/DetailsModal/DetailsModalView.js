import { DetailsModalTemplate } from './DetailsModalTemplate.js';

export class DetailsModalView {
  constructor() {
    this.templates = {
      'cat': DetailsModalTemplate.getCatsHTML,
      'dog': DetailsModalTemplate.getDogsHTML,
      'fish': DetailsModalTemplate.getFishesHTML,
      'bird': DetailsModalTemplate.getBirdsHTML,
    };
    this.root = document.querySelector('.details_modal');
  }

  render(data) {
    this.root.innerHTML = DetailsModalTemplate.getDetails(data, this.templates[data.species]);
    document.querySelectorAll('.modal_close').forEach(x => x.addEventListener('click', this.closeButtonClickHandler));
  }

  closeButtonClickHandler = () => {
    this.root.style.removeProperty('display');
    document.body.style.removeProperty('overflow-y');
    document.documentElement.classList.remove('uk-modal-page');
    this.root.innerHTML = '';
  };
}
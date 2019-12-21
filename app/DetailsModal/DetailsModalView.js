import { DetailsModalBirdsTemplate } from './DetailsModalBirdsTemplate.js';
import { DetailsModalCatsTemplate } from './DetailsModalCatsTemplate.js';
import { DetailsModalDogsTemplate } from './DetailsModalDogsTemplate.js';
import { DetailsModalFishesTemplate } from './DetailsModalFishesTemplate.js';

export class DetailsModalView {
  constructor() {
    this.templates = {
      'cat': DetailsModalCatsTemplate.getHTML,
      'dog': DetailsModalDogsTemplate.getHTML,
      'fish': DetailsModalFishesTemplate.getHTML,
      'bird': DetailsModalBirdsTemplate.getHTML,
    };
    this.root = document.querySelector('.details_modal');
  }

  render(data) {
    this.root.innerHTML = this.templates[data.species](data);
    this.addEventListenersToClose();
  }

  addEventListenersToClose() {
    document.querySelectorAll('.modal_close').forEach(x => {
      x.addEventListener('click', () => {
        this.root.innerHTML = '';
      });
    });
  }
}
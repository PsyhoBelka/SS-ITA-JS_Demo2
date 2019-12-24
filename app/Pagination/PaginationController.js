import { DEFAULT_PAGE_NUMBER_ON_START } from '../utils/config.js';
import { Observer } from '../utils/Observer.js';
import { PaginationView } from './PaginationView.js';

export class PaginationController {
  constructor(data) {
    this.data = data;
    this.view = new PaginationView(data);
    this.currentPage = DEFAULT_PAGE_NUMBER_ON_START;
  }

  showPagination() {
    this.view.render({
      currentPage: this.currentPage,
      prevClick: this.previousButtonClickHandler,
      pageNumClick: this.pageNumberClickHandler,
      nextClick: this.nextButtonClickHandler,
    });
  }

  previousButtonClickHandler = () => {
    this.currentPage--;
    Observer.notify('page-change', this.currentPage);
    this.showPagination();
  };

  nextButtonClickHandler = () => {
    this.currentPage++;
    Observer.notify('page-change', this.currentPage);
    this.showPagination();
  };

  pageNumberClickHandler = (ev) => {
    if (ev.target.innerText) {
      this.currentPage = +ev.target.innerText;
      Observer.notify('page-change', this.currentPage);
      this.showPagination();
    }
  };

  clone() {
    document.querySelector('.app_root').insertAdjacentElement('beforeend', this.view.clone());
  }
}
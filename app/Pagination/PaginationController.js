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
      pageNumClick: this.pageNumberClickHandler,
    });
  }

  pageNumberClickHandler = (ev) => {
    if (ev.target.parentNode.classList.contains('uk-pagination-previous')) {
      this.currentPage--;
      Observer.notify('page-change', this.currentPage);
      this.showPagination();
    }
    if (ev.target.parentNode.classList.contains('uk-pagination-next')) {
      this.currentPage++;
      Observer.notify('page-change', this.currentPage);
      this.showPagination();
    }
    if (ev.target.matches('.page_num')) {
      this.currentPage = +ev.target.innerText;
      Observer.notify('page-change', this.currentPage);
      this.showPagination();
    }
    ev.target.scrollTo({
      top: 10,
      left: 10,
      behavior: 'smooth',
    });
  };

  clone() {
    this.view.clone(this.pageNumberClickHandler);
  }
}
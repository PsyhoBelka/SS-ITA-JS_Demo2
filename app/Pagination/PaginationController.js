import { DEFAULT_PAGE_NUMBER_ON_START } from '../utils/config.js';
import { Observer } from '../utils/Observer.js';
import { PaginationView } from './PaginationView.js';

export class PaginationController {
  constructor() {
    this.data = [];
    this.view = new PaginationView();
    this.currentPage = DEFAULT_PAGE_NUMBER_ON_START;
  }

  showPagination({ data, page }) {
    this.data = data;
    this.view.render({
      data: data,
      currentPage: page ? page : this.currentPage,
      pageNumClick: this.pageNumberClickHandler,
    });
  }

  pageNumberClickHandler = (ev) => {
    if (ev.target.parentNode.classList.contains('uk-pagination-previous')) {
      this.currentPage--;
      Observer.notify('page-change', { dataToShow: this.data, currentPage: this.currentPage });
    } else if (ev.target.parentNode.classList.contains('uk-pagination-next')) {
      this.currentPage++;
      Observer.notify('page-change', { dataToShow: this.data, currentPage: this.currentPage });
    } else if (ev.target.matches('.page_num')) {
      this.currentPage = +ev.target.innerText;
      Observer.notify('page-change', { dataToShow: this.data, currentPage: this.currentPage });
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
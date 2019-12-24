export class PaginationTemplate {
  static getHTML(pagesCount, currentPage) {
    let str = '';

    str += `<li><a class="prev_button ${currentPage === 1 ? 'uk-disabled' : ''}"><span uk-pagination-previous></span></a></li>`;
    str += Array(pagesCount).fill('').map((x, i) => {
      return `<li ${i + 1 === currentPage ? 'class="uk-active"' : ''}><a class="page_num" href="#">${i + 1}</a></li>`;
    }).join('');
    str += `<li><a class="next_button ${currentPage === pagesCount ? 'uk-disabled' : ''}" href="#"><span uk-pagination-next></span></a></li>`;
    // language=HTML
    return `
        <div class="pagination uk-flex uk-flex-center uk-margin">
            <ul class="uk-pagination" uk-margin>
                ${str}
            </ul>
        </div>`;
  }


}
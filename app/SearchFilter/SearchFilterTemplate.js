export class SearchFilterTemplate {
  static getHTML() {
    // language=HTML
    return `
        <div class="search_filter uk-flex uk-flex-center">
            <div class="uk-margin uk-margin-remove-vertical">
                <form class="uk-flex" action="#">
                    <div class="uk-inline">
                        <a href="#" class="search__clear_input uk-form-icon uk-form-icon-flip"
                           uk-icon="icon: close"></a>
                        <input class="search_input uk-input uk-form-small uk-width-large uk-flex-inline" type="text"
                               placeholder="enter breed and press Enter">
                    </div>
                    <select class="select_sort uk-select uk-form-small uk-width-small uk-flex-inline">
                        <option value="default">---sort by---</option>
                        <option value="price_asc">sort by price asc</option>
                        <option value="price_desc">sort by price desc</option>
                        <option value="age_asc">sort by age asc</option>
                        <option value="age_desc">sort by age desc</option>
                    </select>
                </form>
            </div>
        </div>
    `;
  }
}
export class SearchFilterTemplate {
  static getHTML() {
    // language=HTML
    return `
        <div class="search_filter uk-flex uk-flex-center">
            <div class="uk-margin uk-margin-remove-vertical">
                <form class="uk-flex" action="#">
                    <input class="uk-input uk-form-small uk-width-large uk-flex-inline" type="text"
                           placeholder="search by breed">
                    <select class="uk-select uk-form-small uk-width-small uk-flex-inline">
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
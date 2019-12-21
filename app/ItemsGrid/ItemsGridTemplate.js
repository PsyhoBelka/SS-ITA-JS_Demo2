export class ItemsGridTemplate {
  getSmallItemCardHTML({ id, species, breed, image, price, gender, birth_date }) {
    return `
        <div class="uk-flex-inline">
                <div class="item_card uk-card uk-card-default uk-card-hover uk-margin-small-left uk-margin-small-right">
                    <div class="uk-flex uk-flex-column uk-child-width-1-1 ">
                        <h3 class="uk-flex-wrap uk-margin-remove  uk-text-center">${breed}</h3>
                        <div class="photo uk-card-header uk-flex uk-flex-center uk-padding-small">
                            <img src="${image}">
                        </div>
                    </div>
                    <div class="item_description uk-flex uk-flex-around uk-margin-small-left">
                        <div class="uk-flex uk-flex-middle">
                            <h1>${species}</h1>
                        </div>
                        <div class="uk-flex uk-text-center">
                            Gender: ${gender} <br>
                            Price: $${price} <br>
                            Age: ${((Date.now() - birth_date) / 1000 / 60 / 60 / 24 / 365).toFixed(0)} yr
                        </div>
                    </div>
                    <div class="uk-card-footer uk-flex uk-flex-middle uk-flex-center uk-flex-stretch">
                        <div class="item__buy_button uk-button uk-button-primary uk-padding-remove-bottom uk-padding-remove-top uk-padding-small  uk-width-1-2">
                            <div class="item_id_${id} uk-flex uk-flex-around uk-text-center">Buy</div>
                        </div>
                        <div class="item__details_button uk-button uk-button-danger uk-padding-remove-bottom uk-padding-remove-top uk-padding-small  uk-width-1-2">
                            <div uk-toggle="target: #details_modal" class="item_id_${id} uk-flex uk-flex-around uk-text-center">Details</div>
                        </div>
                    </div>
                </div>
            </div>
`;
  }

  getHTML(data) {
    let str = '';
    data.forEach(x => {
      str += this.getSmallItemCardHTML(x);
    });
    // language=HTML
    return `
        <div class="uk-flex uk-flex-center uk-flex-middle uk-flex-wrap" uk-margin>
            ${str}
        </div>
    `;
  }
}

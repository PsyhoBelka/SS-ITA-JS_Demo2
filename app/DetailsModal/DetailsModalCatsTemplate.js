export class DetailsModalCatsTemplate {

  static getHTML({ breed, price, gender, weight, birth_date, color, image, is_sterile, hair }) {
    // language=HTML
    return `
        <div class="uk-modal-dialog uk-modal-body">
            <button class="modal_close uk-modal-close-default uk-flex-right" type="button" uk-close></button>
            <h2 class="details_title uk-modal-title uk-flex uk-flex-center">${breed}</h2>
            <div class="details_photo uk-flex uk-flex-center">
                <img src="${image}">
            </div>
            <div class="details_body uk-modal-body uk-flex uk-flex-row uk-flex-around">
                <div class="uk-flex uk-flex-column uk-flex-inline">
                    Gender: ${gender}<br>
                    Age: ${((Date.now() - birth_date) / 1000 / 60 / 60 / 24 / 365).toFixed(0)} yr<br>
                    Sterile: ${is_sterile ? 'Yes' : 'No'}<br>
                    Weigth: ${weight} <br>
                    Color: ${color} <br>
                    Hair: ${hair}
                </div>
                <div class="uk-flex uk-flex-column uk-flex-inline ">
                    <h2 class="uk-heading-small">$${price.toFixed(2)}</h2>
                </div>
            </div>
            <div class="uk-flex uk-flex-around">
                <div class="uk-flex uk-flex-left uk-flex-inline">
                    <div class="modal_details__buy_button clickable uk-button uk-button-danger uk-padding-small uk-padding-remove-vertical">
                        Buy pet
                    </div>
                </div>
                <div class="uk-flex uk-flex-right uk-flex-inline">
                    <div class="modal_close uk-button uk-button-secondary">
                        <div class="clickable  uk-modal-close uk-padding-small uk-padding-remove-vertical">Close
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}
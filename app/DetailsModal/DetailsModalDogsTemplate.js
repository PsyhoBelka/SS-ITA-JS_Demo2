export class DetailsModalDogsTemplate {

  static getHTML() {
    // language=HTML
    return `
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default uk-flex-right" type="button" uk-close></button>
            <h2 class="details_title uk-modal-title uk-flex uk-flex-center">Siberian husky</h2>
            <div class="details_photo">
                <img src="assets/cat-1.jpg">
            </div>
            <div class="details_body uk-modal-body uk-flex uk-flex-row uk-flex-around">
                <div class="uk-flex uk-flex-column uk-flex-inline">
                    Gender:<br>
                    Age:<br>
                    Sterile:<br>
                    body
                </div>
                <div class="uk-flex uk-flex-column uk-flex-inline ">
                    <h2 class="uk-heading-small">$344</h2>
                </div>

            </div>
            <div class="uk-flex uk-flex-around">
                <div class="uk-flex uk-flex-left uk-flex-inline">
                    <div class="clickable uk-button uk-button-danger uk-padding-small uk-padding-remove-vertical">
                        Buy pet
                    </div>
                </div>
                <div class="uk-flex uk-flex-right uk-flex-inline">
                    <div class="uk-button uk-button-secondary">
                        <div class="clickable uk-modal-close uk-padding-small uk-padding-remove-vertical">Close
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}
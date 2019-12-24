export class DetailsModalTemplate {
  static getDetails(data, type) {
    // language=HTML
    return `
        <div class="uk-modal-dialog uk-modal-body uk-padding-small">
            <button class="modal_close uk-modal-close-default uk-flex-right" type="button" uk-close></button>
            <h2 class="details_title uk-modal-title uk-flex uk-flex-center">${data.breed}</h2>
            <div class="details_photo uk-flex uk-flex-center">
                <img src="${data.image}" onerror="this.onerror = null; this.src='assets/No-image-available.png';">
            </div>
            <div class="details_body uk-modal-body uk-flex uk-flex-row uk-flex-around uk-padding-small">
                <table class="details_table uk-table uk-table-small uk-table-divider uk-width-small uk-table-middle">
                            <tbody>
                            <tr>
                                <td >Gender</td>
                                <td >${data.gender}</td>
                            </tr>
                            <tr>
                                <td >Age</td>
                                <td >${((Date.now() - data.birth_date) / 1000 / 60 / 60 / 24 / 365).toFixed(0)} yr</td>
                            </tr>
                            <tr>
                                <td >Weight</td>
                                <td >${data.weight}kg</td>
                            </tr>
                            <tr>
                                <td >Color</td>
                                <td >${data.color}</td>
                            </tr>
                            ${type(data)}
                            </tbody>
                        </table>
                <div class="uk-flex uk-flex-inline uk-flex-middle">
                    <h2 class="uk-heading-small">$${data.price.toFixed(2)}</h2>
                </div>
            </div>
            <div class="uk-flex uk-flex-around">
                <div class="uk-flex uk-flex-left uk-flex-inline">
                    <div class="modal_details__buy_button clickable uk-button uk-button-danger uk-padding-small uk-padding-remove-vertical">
                        Buy pet
                    </div>
                </div>
                <div class="uk-flex uk-flex-right uk-flex-inline">
                    <div class="modal_close uk-button uk-button-secondary uk-modal-close">
                        <div class="clickable uk-padding-small uk-padding-remove-vertical">Close
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }

  static getCatsHTML({ is_sterile, hair }) {
    // language=HTML
    return `
                            <tr>
                                <td >Sterile</td>
                                <td >${is_sterile ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td >Hair</td>
                                <td >${hair}</td>
                            </tr>
                            
    `;
  }

  static getDogsHTML({ is_sterile, hair }) {
    // language=HTML
    return `
                            <tr>
                                <td >Sterile</td>
                                <td >${is_sterile ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td >Hair</td>
                                <td >${hair}</td>
                            </tr>
                            
    `;
  }

  static getFishesHTML({ water_type, temper }) {
    // language=HTML
    return `
                            <tr>
                                <td >Water type</td>
                                <td >${water_type}</td>
                            </tr>
                            <tr>
                                <td >Temper</td>
                                <td >${temper}</td>
                            </tr>
                            
    `;
  }

  static getBirdsHTML({ type, activity }) {
    // language=HTML
    return `
        
                            <tr>
                                <td >Type</td>
                                <td >${type}</td>
                            </tr>
                            <tr>
                                <td >Activity</td>
                                <td >${activity}</td>
                            </tr>
                            
    `;
  }
}
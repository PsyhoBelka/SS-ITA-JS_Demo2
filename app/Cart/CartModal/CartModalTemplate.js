export class CartModalTemplate {
  static getHTML({ totals, data }) {
    // language=HTML
    return `<div class="uk-modal-dialog uk-modal-body uk-padding-small">
    <h1>Cart items:</h1>
    <div class="cart_table__content">
        <table class="uk-table uk-table-middle">
            <tbody>
            ${this.getHTMLItem(data)}
            </tbody>
        </table>
    </div>
    <div class="uk-flex uk-flex-right uk-margin-medium-bottom">
        TOTAL: $${totals.toFixed(2)}
    </div>
    <div class="uk-flex uk-flex-center">
        <ul uk-accordion>
            <li>
                <a class="uk-accordion-title" href="#">Please, specify additional order information &#11167;</a>
                <div class="uk-accordion-content">
                    <form action="#" class="customer_details uk-form-horizontal">
                        <div>
                            <div class="uk-form-label">
                                <label>Your name:</label>
                            </div>
                            <div class="uk-form-controls">
                                <input class="customer_details__name uk-input" type="text" required>
                            </div>
                        </div>
                        <div>
                            <div class="uk-form-label">
                                <label>Your phone number:</label>
                            </div>
                            <div class="uk-form-controls">
                                <input class="customer_details__phone uk-input" type="text" placeholder="0xx1234567" required>
                            </div>
                        </div>
                        <div>
                            <div class="uk-form-label">
                                <label>You address:</label>
                            </div>
                            <div class="uk-form-controls">
                                <input class="customer_details__address uk-input" type="text" required>
                            </div>
                        </div>
                        <div>
                            <div class="uk-form-label">
                                <label>Your email:</label>
                            </div>
                            <div class="uk-form-controls">
                                <input class="customer_details__email uk-input" type="email" placeholder="domain@example.com" required>
                            </div>
                        </div>
                         <div>
                            <div class="uk-form-label">
                                <label>Notes to order:</label>
                            </div>
                            <div class="uk-form-controls">
                                <textarea class="customer_details__notes uk-textarea"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
        </ul>
    </div>
    <div class="uk-flex uk-flex-center uk-flex-around">
        <div class="cart_button__clear uk-button uk-button-danger">
            Clear
        </div>
        <div class="cart_button__finish uk-button uk-button-primary">
            Finish
        </div>
        <div class="cart_button__close uk-button uk-button-secondary ">
            Close
        </div>
    </div>
</div>`;
  }

  static getHTMLItem(data) {
    return data.map((x) => {
      // language=HTML
      return `
          <tr class="cart-item-${x.item.id}" valign="bottom">
              <td><img src="${x.item.image}" alt="" width="80px"
              onerror="this.onerror = null; this.src='assets/No-image-available.png';"></td>
              <td>${x.item.breed}</td>
              <td>$${x.item.price.toFixed(2)}</td>
              <td><input width="30px" type="number" min="1" value="${x.count}"></td>
              <td>$${(x.item.price * x.count).toFixed(2)}</td>
          </tr>
      `;
    }).join('');
  }
}
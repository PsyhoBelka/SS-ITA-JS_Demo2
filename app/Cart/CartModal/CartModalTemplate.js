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
    <div class="uk-flex uk-flex-left">
        <ul uk-accordion>
            <li>
                <a class="uk-accordion-title" href="#">Please, specify additional order information &#11167;</a>
                <div class="uk-accordion-content">
                    <table class="cart__customer_info"></td>
                        <tbody>
                        <tr>
                            <td class="uk-align-right uk-margin-remove-vertical">
                                <label >Your name:</label>
                            </td>
                            <td class="uk-table-expand">
                                <input type="text">*
                            </td>
                        </tr>
                        <tr>
                            <td class="uk-align-right uk-margin-remove-vertical">
                                <label >Your phone number:</label>
                            </td>
                            <td>
                                <input type="text" placeholder="0xx1234567">*
                            </td>
                        </tr>
                        <tr>
                            <td class="uk-align-right uk-margin-remove-vertical">
                                <label >You address:</label>
                            </td>
                            <td>
                                <input type="text">*
                            </td>
                        </tr>
                        <tr>
                            <td class="uk-align-right uk-margin-remove-vertical">
                                <label >Your email:</label>
                            </td>
                            <td>
                                <input type="email" placeholder="domain@example.com">*
                            </td>
                        </tr>
                        <tr>
                            <td class="uk-align-right uk-margin-remove-vertical">
                                <label >Notes to order:</label>
                            <td>
                                <textarea></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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
export class CartModalTemplate {
  static getHTML({ totals, data }) {
    return `
    <div id="cart_modal" class="cart_modal uk-modal " style="display: none;" uk-modal>
                <div class="uk-modal-dialog uk-modal-body uk-padding-small">
                    <h1>Cart items:</h1>
                    <table class="uk-table">
                        <tbody>
                        
                        ${this.getHTMLItem(data)}
                        <tr>
                            <td colspan="5" class="uk-text-right">TOTAL: $${totals}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="uk-flex uk-flex-center uk-flex-around">
                        <div class="uk-button uk-button-danger">
                            Clear
                        </div>
                        <div class="uk-button  uk-button-primary">
                            Finish
                        </div>
                        <div class="uk-button uk-button-secondary ">
                            Close
                        </div>
                    </div>
                </div>
            </div>
    `;
  }

  static getHTMLItem({ image, breed, price, count }) {
    return data.map(() => {
      // language=HTML
      return `
          <tr>
              <td><img src="${image}" alt=""></td>
              <td>${breed}</td>
              <td>${price}</td>
              <td><input width="30px" type="number" value="${count}"></td>
              <td>${price * count}</td>
          </tr>
      `;
    }).join('');
  }
}
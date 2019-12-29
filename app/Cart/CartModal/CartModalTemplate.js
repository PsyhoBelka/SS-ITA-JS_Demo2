export class CartModalTemplate {
  static getHTML({ totals, data }) {
    return `
    
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
                </div>
    `;
  }

  static getHTMLItem(data) {
    return data.map(() => {
      // language=HTML
      return `
          <tr>
              <td><img src="${data.image}" alt=""></td>
              <td>$data.{breed}</td>
              <td>${data.price}</td>
              <td><input width="30px" type="number" value="${data.count}"></td>
              <td>${data.price * data.count}</td>
          </tr>
      `;
    }).join('');
  }
}
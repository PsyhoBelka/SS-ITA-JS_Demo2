export class CartLinkTemplate {
  static getHTML(cartSize) {
    // language=HTML
    return `
        <img class="uk-margin-small-right" src="assets/shopping-cart.png" width="25px"/>
        <a uk-toggle="target: #cart_modal"><span class="cart_container__link clickable">Cart</span></a>
        <span class="cart_badge uk-badge uk-flex uk-flex-inline">${cartSize}</span>
    `;
  }
}
export class HeaderTemplate {
  static getHTML() {
    return `
        <!--header container-->
        <div class="header uk-flex uk-flex-middle">
            <div class="uk-flex uk-flex-middle uk-flex-left uk-width-1-1">
                <img src="assets/camping-logo.jpg" width="100px" alt="" uk-img>
                <h1> Animals shopper </h1>
            </div>
            <div class="uk-flex uk-flex-middle uk-flex-right uk-margin-medium-top">
                <img class="uk-margin-small-right" src="assets/shopping-cart.png" width="25px">
                <span class="cart_link clickable ">Cart</span><span
                    class="cart_badge uk-badge uk-flex uk-flex-inline">0</span>
                <hr class="uk-divider-vertical-custom">
                <img class="uk-margin-small-right" src="assets/login-icon.png" width="20px">
                <span class="login_link clickable" id="111">Login</span>
            </div>
        </div>`;
  }
}
export class HeaderView {
  addEventListeners({ cart, login }) {
    this.cart = document.querySelector('.cart_link');
    this.login = document.querySelector('.login_link');

    this.cart.addEventListener('click', cart);
    this.login.addEventListener('click', login);
  }

  render() {
    // language=HTML
    return `<!--header container-->
    <div class=" uk-flex uk-flex-middle">
        <div class="uk-flex uk-flex-middle uk-flex-left uk-width-1-1">
            <img src="assets/camping-logo.jpg" width="100px" alt="" uk-img>
            <h1> Animals shopper </h1>
        </div>
        <div class="uk-flex uk-flex-middle uk-flex-right uk-margin-medium-top">
            <img class="uk-margin-small-right" src="assets/shopping-cart.png" width="25px">
            <span class="cart_link clickable">Cart</span>
            <hr class="uk-divider-vertical-custom">
            <img class="uk-margin-small-right" src="assets/login-icon.png" width="20px">
            <span class="login_link clickable" id="111">Login</span>
        </div>
    </div>`;
  }
}
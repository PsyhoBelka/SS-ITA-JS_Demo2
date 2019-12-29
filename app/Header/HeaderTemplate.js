export class HeaderTemplate {
  static getHTML() {
    return `<!--header container-->
<div class=" uk-flex uk-flex-middle">
    <div class="uk-flex uk-flex-middle uk-flex-left uk-width-1-1">
        <img src="assets/camping-logo.jpg" width="100px" alt="" uk-img>
        <h1> Animals shopper </h1>
    </div>
    <div class="uk-flex uk-flex-middle uk-flex-right uk-margin-medium-top">
        <div class="cart_container uk-flex uk-flex-inline uk-width-small">
            
        </div>
        <!--<hr class="uk-divider-vertical-custom">-->
        <div class="login_container uk-flex uk-flex-inline">
            <img class="uk-margin-small-right" src="assets/login-icon.png" width="20px">
            <span class="login_container__link clickable">Login</span>
        </div>
    </div>
</div>`;
  }
}
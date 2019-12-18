export class ItemCardTemplate {
  getSmallItemCardHTML({ id, species, breed, image, price, gender, birth_date }) {
    // language=HTML
    return `

    `;
  }
}

/*
<div>
<div class="uk-card uk-card-default uk-card-body uk-card-hover uk-padding-small ">
  <div class="uk-grid uk-child-width-1-2">
  <!--foto-->
  <div>
  <div>
  <img src="assets/cat-1.jpg" width="500px">
  </div>
  </div>
  <!--small data-->
  <div class="uk-margin-medium-bottom">
  <h2 class="uk-card-title uk-margin-remove">
  Cat, siamian
</h2>
<div class="uk-grid uk-child-width-1-2 ">
  <div class="item-properties">
  <p>Price:</p>
<p>Gender:</p>
<p>Age:</p>
</div>
<div class="item-properties">
  <p>$23.45</p>
<p>male</p>
<p>45 years</p>
</div>
</div>
</div>
</div>
<!--buttons-->
<div class="uk-flex uk-child-width-1-2">
  <div class="item__buy_button uk-button uk-button-primary uk-child-width-1-1 uk-margin-large-right">
  <span>Buy</span>
  </div>
  <div class="item__details_button uk-button uk-button-danger uk-child-width-1-1">
  <span>Details</span>
  </div>
  </div>
  </div>
  </div>
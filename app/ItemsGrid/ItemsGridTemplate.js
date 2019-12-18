export class ItemsGridTemplate {
  getSmallItemCardHTML({ id, species, breed, image, price, gender, birth_date }) {
    // language=HTML
    return `
         <div>
            <div class="uk-card uk-card-default uk-card-body uk-card-hover uk-padding-small ">
                <div class="uk-grid uk-child-width-1-2 uk-overflow-hidden" uk-grid>
                    <!--foto-->
                    <div>
                        <div class="item_img">
                            <img src="${image}" width="400px" height="200px">
                        </div>
                    </div>
                    <!--small data-->
                    <div class="">
                        <h2 class="uk-card-title uk-margin-remove">
                            ${species}, ${breed}
                        </h2>
                        <div class="uk-grid uk-child-width-1-2 " uk-grid>
                            <div class="item_properties">
                                <p>Price:</p>
                                <p>Gender:</p>
                                <p>Age:</p>
                            </div>
                            <div class="item_properties">
                                <p>$${price}</p>
                                <p>${gender}</p>
                                <p>${((Date.now() - birth_date) / 1000 / 60 / 60 / 24 / 365).toFixed(0)} yr</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--buttons-->
                <div class="uk-flex uk-child-width-1-2 uk-margin-small-top">
                    <div class="item__buy_button item_id_${id} uk-button uk-button-primary uk-child-width-1-1 uk-margin-large-right">
                        <span>Buy</span>
                    </div>
                    <div class="item__details_button item_id_${id} uk-button uk-button-danger uk-child-width-1-1">
                        <span>Details</span>
                    </div>
                </div>
            </div>
        </div>
        `;
  }

  getHTML(data) {
    let str = '';
    data.forEach(x => {
      str += this.getSmallItemCardHTML(x);
    });
    // language=HTML
    return `
        <div class="uk-grid uk-child-width-1-4 uk-grid-small " uk-grid>
            ${str}
        </div>
    `;
  }
}

/*

<div class="uk-grid uk-child-width-1-4 uk-grid-small " uk-grid>

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

</div>

*/
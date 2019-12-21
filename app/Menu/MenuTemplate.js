export class MenuTemplate {
  getMenuItemHTML({ menuItemIndex, menuItemName }) {
    // language=HTML
    return `
<li class="item-${menuItemIndex} menu-items">
    <a class="item-link-${menuItemIndex}">
        ${menuItemName}
    </a>
</li>
    `;
  }

  getHtml(data) {
    // language=HTML
    let str = `<!--menu container-->
    <div>
        <ul uk-tab class="uk-tab-bottom uk-flex-center menu">
    `;
    data.forEach(x => {
      str += this.getMenuItemHTML(x);
    });
    // language=HTML
    str += `
        </ul>
        <hr class="under-header-divider">
        </div>`;
    return str;
  }
}
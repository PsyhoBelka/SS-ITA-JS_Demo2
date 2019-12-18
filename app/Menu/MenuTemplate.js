export class MenuTemplate {
  getMenuItemHTML({ menuItemIndex, menuItemName }) {
    return `
        <li class="item-${menuItemIndex} menu-items">
            <a class="item-link-${menuItemIndex}">
                ${menuItemName}
            </a>
        </li>
    `;
  }

  getHtml(data) {
    let str = '';
    data.forEach(x => {
      str += this.getMenuItemHTML(x);
    });
    return str;
  }
}
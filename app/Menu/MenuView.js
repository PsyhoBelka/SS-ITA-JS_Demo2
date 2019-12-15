import { Templater } from '../Templater.js';

export class MenuView {
  constructor() {
    this.domElem = document.querySelector('.menu');
    this.menuItems = [];
    this.templater = new Templater('./app/templates/menu.tpl');
  }

  prepareData = (data) => {
    return data.map((x, i) => {
      return {
        index: i,
        name: x,
      };
    });
  };

  render = (items, onSelect) => {
    this.domElem.innerHTML = '';
    console.log(items);
    this.domElem.innerHTML = this.templater.getHTML(this.prepareData(items));
    // items.forEach((x, i) => {
    //   this.domElem.innerHTML += `
    //     <li class="item-${i} menu-items"><a class="item-link-${i}">${x}</a></li>
    // `;
    // });
    this.addListeners(onSelect);
  };

  addListeners = (func) => {
    this.menuItems = document.querySelectorAll('[class*=item-link]');
    this.menuItems.forEach(x => {
      x.addEventListener('click', func);
    });
  };
}
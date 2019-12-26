import { CartModalController } from './CartModal/CartModalController.js';
import { DetailsModalController } from './DetailsModal/DetailsModalController.js';
import { FooterController } from './Footer/FooterController.js';
import { HeaderController } from './Header/HeaderController.js';
import { ItemsGridController } from './ItemsGrid/ItemsGridController.js';
import { MenuController } from './Menu/MenuController.js';
import { API_URL } from './utils/config.js';

export class Initializer {
  static async init() {
    await fetch(`${API_URL}/animals`)
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('animals', JSON.stringify(data));
      });

    const headerController = new HeaderController();
    const menuController = new MenuController();
    const detailsModalController = new DetailsModalController();
    const cartModalController = new CartModalController();
    const itemsGridController = new ItemsGridController();
    const footerController = new FooterController();
    const root = document.querySelector('.app_root');

    await headerController.showHeader(root);
    await menuController.showMenu(root);
    await itemsGridController.showGrid({});
    await footerController.showFooter(root);
  }
}
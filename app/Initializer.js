import { CartController } from './Cart/CartController.js';
import { DetailsModalController } from './DetailsModal/DetailsModalController.js';
import { FooterController } from './Footer/FooterController.js';
import { HeaderController } from './Header/HeaderController.js';
import { ItemsGridController } from './ItemsGrid/ItemsGridController.js';
import { MenuController } from './Menu/MenuController.js';

//todo not better solution must be rewritten to pub\sub
export class Initializer {
  static async init() {

    const cartController = new CartController();
    const detailsModalController = new DetailsModalController();
    const headerController = new HeaderController();
    const menuController = new MenuController();
    const itemsGridController = new ItemsGridController();
    const footerController = new FooterController();
    const root = document.querySelector('.app_root');

    await headerController.showHeader();
    await menuController.showMenu(root);
    await itemsGridController.showGrid();
    await footerController.showFooter(root);
  }
}
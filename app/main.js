import { DetailsModalController } from './DetailsModal/DetailsModalController.js';
import { FooterController } from './Footer/FooterController.js';
import { HeaderController } from './Header/HeaderController.js';
import { ItemsGridController } from './ItemsGrid/ItemsGridController.js';
import { MenuController } from './Menu/MenuController.js';
import { Observer } from './utils/Observer.js';

const headerController = new HeaderController();
const menuController = new MenuController(Observer.getActions());
const detailsModalController = new DetailsModalController();
const itemsGridController = new ItemsGridController(detailsModalController, Observer.getActions());
const footerController = new FooterController();
const root = document.querySelector('.app_root');

async function init() {
  await headerController.showHeader(root);
  await menuController.showMenu(root);
  await itemsGridController.showGrid(root);
  await footerController.showFooter(root);
}

async function changePage() {
  await itemsGridController.showGrid(root, 5);
}

init();
setTimeout(changePage, 3000);
import { ItemsGridController } from './ItemsGrid/ItemsGridController.js';
import { MenuController } from './Menu/MenuController.js';

const menuController = new MenuController();
const itemsGridController = new ItemsGridController();


menuController.showMenu();
itemsGridController.showGrid();

// fetch(`${API_URL}/categories`).then(data => data.json()).then(json => console.log(json));
//show that tpl was cashed
// window.menu=menuController;